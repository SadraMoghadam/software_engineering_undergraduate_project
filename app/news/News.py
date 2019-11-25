from django.http import JsonResponse
from django.core import serializers

from rest_framework.decorators import api_view

from .models import News

@api_view(['GET'])
def get_news(request):
    news = News.objects.all().values()
    return JsonResponse({"result": list(news)})

@api_view(['GET'])
def get_news_detail(request, news_id):
    news = None
    try:
        news = News.objects.get(id=news_id)
    except:
        return JsonResponse({"error": "Not found"})
    result = {
        "title": news.title,
        "context": news.context,
        "timestamp": news.timestamp
    }
    
    if news.image:
        result["image"] = news.image.url
    
    return JsonResponse(result)
