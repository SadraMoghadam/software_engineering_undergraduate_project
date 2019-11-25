from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view

from .models import News


@api_view(['GET'])
def get_news(request):
    news = News.objects.all().values()
    return JsonResponse({"result": list(news)})


@api_view(['GET'])
def get_news_detail(request, news_id):
    news = None
    news = get_object_or_404(News, pk=news_id)
    result = {
        "title": news.title,
        "context": news.context,
        "timestamp": news.timestamp
    }

    if news.image:
        result["image"] = news.image.url

    return JsonResponse(result)
