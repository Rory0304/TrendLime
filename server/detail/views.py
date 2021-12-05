from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Category, Tag, Song_without_year, Top11, Top11_like100, Song_with_meta_emotion


# Create your views here.

def detail(reauest):
  search_word = request.GET.get("q")

  # queryset = Song_without_year.objects.filter()
  # 아직 디테일 이 정해지지 않음

  
  return JsonResponse()
