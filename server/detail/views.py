from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Category, Tag, Song_without_year, Top11, Top11_like100, Song_with_meta_emotion


# Create your views here.

# 단일 노래 기본 정보 제공
@csrf_exempt
def detail(request):
  song_id = request.GET.get("song_id")
  single_song_info_queryset = Song_without_year.objects.filter(song_id = f'{song_id}')

  if single_song_info_queryset.exists:
    for data in single_song_info_queryset:
      single_song_info = {
        'song_id' : data.song_id,
        'song_name' : data.song_name,
        'artist' : data.artist,
        'album' : data.album,
        'Like_Count' : data.Like_Count,
        'Lyric' : data.Lyric,
        'cover_url' : data.cover_url,
        'tags' : data.tags,
      }
  else:
    single_song_info = None
  return JsonResponse(single_song_info , status = 200)



### 아직 미작성된 부분!
# tf-idf 기반 가사와 유사한 노래 리스트 10개 제공
@csrf_exempt
def recommend_song_info(request):
  song_id = request.GET.get("song_id")
  # single_song_info_queryset = Song_without_year.objects.filter(song_id__icontains = f'{song_id}')

  return JsonResponse(context , status = 200)


# 토픽 모델링 기반 노래 정보 제공
@csrf_exempt
def topic_based_info(request):
  song_id = request.GET.get("song_id")

  topic_based_info_queryset = Song_without_year.objects.filter(song_id__icontains = f'{song_id}')

  return JsonResponse(context , status = 200)


# 노래에 대한 감정 분류 정보 제공
@csrf_exempt
def emotion_based_info(request):
  song_id = request.GET.get("song_id")

  emotion_based_info_queryset = Song_with_meta_emotion.objects.filter(song_id__icontains = f'{song_id}')

  return JsonResponse(context , status = 200)