from django.urls import path
from .University import *

app_name = 'rate'
urlpatterns = [
    path('get-all-universities/', get_universities, name='get_universities'),
    path(
        'get-university-rates/<int:university_id>/',
        get_rates,
        name='get_rates'
        ),
    path(
        'get-university-departments/<int:university_id>/',
        get_departments,
        name='get_departments'
    ),
]
