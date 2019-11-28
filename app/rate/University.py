from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view

from .models import *


@api_view(['GET'])
def get_universities(request):
    universities = University.objects.all().values()
    return JsonResponse({'results': list(universities)})


@api_view(['GET'])
def get_rates(request, university_id):
    university = get_object_or_404(University, pk=university_id)
    rates = UniversityRate.objects.filter(university=university).values()
    return JsonResponse({'results': list(rates)})


@api_view(['GET'])
def get_departments(request, university_id):
    university = get_object_or_404(University, pk=university_id)
    departments = Department.objects.filter(university=university).values()
    return JsonResponse({'results': list(departments)})


@api_view(['POST'])
def submit_rate(request):
    pass
