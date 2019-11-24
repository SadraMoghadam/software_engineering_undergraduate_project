from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.http import JsonResponse

from rest_framework.decorators import api_view


@api_view(['POST'])
def login_user(request):
    data = request.POST
    username = int(data.get('username'))
    password = data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        if user.is_active:
            _login(request, user)
        if user.is_authenticated:
            return JsonResponse({'result': True})
    
    return JsonResponse({'result': False})

def register_user(request):
    pass

def get_users(request):
    pass
