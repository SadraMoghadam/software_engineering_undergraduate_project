from django.http import JsonResponse
from .models import CustomUser

from rest_framework.decorators import api_view


def login_professor(request):
    pass


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


def get_professors(request):
    pass


def get_courses(request, professor_id):
    # with professor id
    pass


def add_course(request, professor_id):
    # with professor id
    # users can not do this
    pass


def get_rates(request, professor_id):
    # with professor id
    pass


def submit_rate(request):
    # with professor id and user id
    pass
