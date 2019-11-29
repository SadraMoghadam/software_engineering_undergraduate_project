from django.urls import path
from .Authentication import *
from .User import *
from .Professor import *

app_name = 'user'
urlpatterns = [
    path('logout/', logout, name='logout'),
    path('login-user/', login_user, name='login_user'),
    path('login-professor/', login_professor, name='login_professor'),
    path('register-professor/', register_professor, name='register_professor'),
    path('get-professors/', get_professors, name='get_professors'),
    path('get-top-professors/', get_top_professors, name='get_top_professors'),
    path('get-courses/<int:professor_id>/', get_courses, name='get_courses'),
    path('add-course/<int:professor_id>/', add_course, name='add_course'),
    path('get-rates/<int:professor_id>/', get_rates, name='get_rates'),
    path('submit-your-rate/', submit_rate, name='submit_rate'),
]
