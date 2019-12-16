from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.contrib.auth import get_user_model
User = get_user_model()

from rest_framework.parsers import JSONParser

from rate.models import Course, ProfessorRate, Tag
from user.serializers import CustomUserSerializer


@csrf_exempt
def login_professor(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        username = int(data.get('username'))
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_professor and user.is_active:
                _login(request, user)

        if user.is_authenticated:
            return JsonResponse({'result': True})

        return JsonResponse({'result': False})


@csrf_exempt
def register_professor(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        data['is_professor'] = True
        serializer = CustomUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def get_professors(request):
    if request.method == 'GET':
        professors = User.objects.filter(is_professor=True, is_active=True)
        serializer = CustomUserSerializer(professors, many=True)
        return JsonResponse(serializer.data, safe=False)

# TODO: complete this!
@csrf_exempt
def get_top_professors(request):
    top_rates = ProfessorRate.objects.all().order_by('-overall_score').values()
    top_professors = []

    for rate in top_rates:
        professor = User.objects.get(username=rate['professor_id'])
        json = {
                'username': professor.username,
                'first_name': professor.first_name,
                'last_name': professor.last_name,
                'email': professor.email,
            }
        if professor.profile_photo:
            json['profile_photo'] = professor.profile_photo.url
        else:
            json['profile_photo'] = None
        top_professors.append(
            json
        )
    return JsonResponse({'result': top_professors})


@csrf_exempt
def get_courses(request, professor_id):
    professor = get_object_or_404(CustomUser, username=professor_id)
    courses = Course.objects.filter(professor=professor).values()
    return JsonResponse({'result': list(courses)})


@csrf_exempt
def add_course(request, professor_id):
    user = request.user
    if user.is_active and user.is_professor:
        data = request.POST
        course_name = data.get('name')
        professor = get_object_or_404(CustomUser, username=professor_id)
        Course.objects.create(professor=professor, name=course_name)
        return JsonResponse({'result': True})
    else:
        return JsonResponse(
                {
                    'detail': 'User is not authenticated',
                }
            )
    return JsonResponse({'detail': 'user is not authenticated'})


@csrf_exempt
def get_rates(request, professor_id):
    professor = get_object_or_404(CustomUser, username=professor_id)
    rates = ProfessorRate.objects.filter(professor=professor).values()
    return JsonResponse({'result': list(rates)})


@csrf_exempt
def submit_rate(request):
    # with professor id and user id
    user = request.user
    if (not user.is_professor) and user.is_active:
        data = request.POST
        professor_id = data.get('professor_id')  # or url ?
        rate_once_before = ProfessorRate.objects.filter(
            user_id=user.username,
            professor_id=professor_id)
        if rate_once_before:
            return JsonResponse({"detail": "User rated once before !"})
        professor = get_object_or_404(CustomUser, username=professor_id)
        comment = data.get('comment')
        difficaullty = data.get('difficaullty')
        quality = data.get('quality')
        grade_rate = data.get('grade_rate')
        notebook = data.get('notebook')
        attendance = data.get('attendance')
        tag_names = data.get('tags').split(',')
        tags = []
        for tag_name in tag_names:
            tag_name = tag_name.strip()
            tags.append(Tag.objects.get_or_create(tag_name))

        professor_rate = ProfessorRate.objects.create(
            user=user,
            professor=professor,
            comment=comment,
            difficaullty=difficaullty,
            quality=quality,
            grade_rate=grade_rate,
            notebook=bool(notebook),
            attendance=bool(attendance),)

        for tag in tags:
            professor_rate.tags.add(tag)

        return JsonResponse({'result': True})
    return JsonResponse({'detail': 'Authentication not failed'})
