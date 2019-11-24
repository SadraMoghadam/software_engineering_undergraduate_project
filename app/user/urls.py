from django.urls import path
from .Authentication import logout
from .User import login_user
from .Professor import register_professor

app_name = 'user'
urlpatterns = [
    path('logout/', logout, name='logout'),
    path('login-user/', login_user, name='login_user'),
    path('register-professor/', register_professor, name='register_professor'),
]
