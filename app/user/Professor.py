from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.contrib.auth.decorators import login_required

from .models import CustomUser
from rate.models import Course, ProfessorRate, Tag

from rest_framework.decorators import api_view


@api_view(['POST'])
def login_professor(request):
    data = request.POST
    username = int(data.get('username'))
    password = data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        if user.is_professor and user.is_active:
            _login(request, user)
    
    if user.is_authenticated:
        return JsonResponse({'result': True})
    
    return JsonResponse({'result': False})


@api_view(['POST'])
def register_professor(request):
    data = request.POST
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    username = int(data.get('username'))
    password = data.get('password')

    user = CustomUser.objects.create_user(
        username=username, email=email, password=password,
        first_name=first_name, last_name=last_name, is_professor=True)

    if user:
        user.save()
        return JsonResponse({"result": True})
    else:
        return JsonResponse({'result': False})


@api_view(['GET'])
def get_professors(request):
    professors = CustomUser.objects.filter(
        is_professor=True, is_active=True
        ).values('username', 'email', 'first_name', 'last_name', 'profile_photo')
    return JsonResponse({'result': list(professors)})


@api_view(['GET'])
def get_top_professors(request):
    top_rates = ProfessorRate.objects.all().order_by('-overall_score').values()
    top_professors = []

    for rate in top_rates:
        professor = CustomUser.objects.get(username=rate['professor_id'])
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


@api_view(['GET'])
def get_courses(request, professor_id):
    professor = get_object_or_404(CustomUser, username=professor_id)
    courses = Course.objects.filter(professor=professor).values()
    return JsonResponse({'result': list(courses)})


@login_required
@api_view(['POST'])
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
                'detail': 'User is not active or he/she is not a professor',
                }
            )
    return JsonResponse({'detail': 'user is not authenticated'})


@api_view(['GET'])
def get_rates(request, professor_id):
    professor = get_object_or_404(CustomUser, username=professor_id)
    rates = ProfessorRate.objects.filter(professor=professor).values()
    return JsonResponse({'result': list(rates)})


@login_required
@api_view(['POST'])
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
        tag_names =  data.get('tags').split(',')
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
