from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

from rest_framework.decorators import api_view

from .models import *


@api_view(['GET'])
def get_universities(request):
    universities = University.objects.all().values()
    return JsonResponse({'results': list(universities)})


@api_view(['GET'])
def get_top_universities(request):
    top_rates = UniversityRate.objects.all().order_by('-overall_score').values('university')
    top_universities = []

    for rate in top_rates:
        university = University.objects.get(id=rate['university'])
        json = {
                'id': university.id,
                'name': university.name,
                'location': university.location.stringLocation,
            }
        if university.image:
            json['image'] = university.image.url
        else:
            json['image'] = None
        top_universities.append(
            json
        )
    return JsonResponse({'result': top_universities})


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


@login_required
@api_view(['POST'])
def submit_rate(request):
    user = request.user
    if (not user.is_professor) and user.is_active:
        data = request.POST
        university_id = data.get('university_id')  # or url ?
        university = get_object_or_404(University, pk=university_id)
        rate_once_before = UniversityRate.objects.filter(user_id=user.username)
        if rate_once_before:
            return JsonResponse({"detail": "User rated once before !"})
        comment = data.get('comment')
        food = data.get('food')
        security = data.get('security')
        location = data.get('location')
        facility = data.get('facility')
        internet = data.get('internet')

        UniversityRate.objects.create(
            university=university,
            user=user,
            comment=comment,
            food_rate=food,
            security_rate=security,
            location_rate=location,
            facility_rate=facility,
            internet_rate=internet
        )
        return JsonResponse({'result': True})
    return JsonResponse({'result': 'Authentication failed.'})
