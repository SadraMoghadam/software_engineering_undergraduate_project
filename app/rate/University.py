from django.http import JsonResponse
from django.core import serializers

from rest_framework.decorators import api_view

from .models import University, UniversityRate

@api_view(['GET'])
def get_universities(request):
    universities = University.objects.all().values()
    return JsonResponse({'results': list(universities)})

@api_view(['GET'])
def get_rates(request, university_id):
    university = None
    
    try:
        university = University.objects.get(id=university_id)
    except:
        return JsonResponse({'error': 'University does not exists'})
    
    rates = UniversityRate.objects.filter(university=university).values()
    return JsonResponse({'results': list(rates)})

def get_departments(request, university_id):
    # with university id
    pass

def submit_rate(request):
    pass
