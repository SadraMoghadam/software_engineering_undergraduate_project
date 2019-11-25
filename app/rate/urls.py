from django.urls import path
from .University import get_universities, get_rates

app_name = 'rate'
urlpatterns = [
    path('get-all-universities/', get_universities, name='get_universities'),
    path(
        'get-university-rates/<int:university_id>/',
        get_rates,
        name='get_rates'
        ),
]
