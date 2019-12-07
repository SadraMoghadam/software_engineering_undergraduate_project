from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.http import JsonResponse
from .models import CustomUser
from rest_framework.decorators import api_view


@api_view(['POST'])
def login_user(request):
    data = request.POST
    username = int(data.get('username'))
    password = data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        if user.is_active and (not user.is_professor):
            _login(request, user)
        if user.is_authenticated:
            return JsonResponse({'result': True})

    return JsonResponse({'result': False})


@api_view(['POST'])
def register_user(request):
    data = request.POST
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    username = int(data.get('username'))
    password = data.get('password')

    user = CustomUser.objects.create_user(
        username=username, email=email, password=password,
        first_name=first_name, last_name=last_name, is_professor=False)

    if user:
        user.save()
        return JsonResponse({"result": True})
    else:
        return JsonResponse({'result': False})


def get_users(request):
    pass
