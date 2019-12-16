from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from rest_framework.parsers import JSONParser

from user.models import CustomUser
from user.serializers import CustomUserSerializer


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        username = int(data.get('username'))
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active and (not user.is_professor):
                _login(request, user)
            if user.is_authenticated:
                return JsonResponse({'result': True})

        return JsonResponse({'result': False})


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        data['is_professor'] = False
        serializer = CustomUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def get_users(request):
    pass
