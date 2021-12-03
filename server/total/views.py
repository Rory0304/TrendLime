from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Category, Tag, Song_without_year, Top11, Top11_like100
# Create your views here.

def total(request):
  search_word = request.GET.get("q")

  title_result_list = []
  artist_result_list = []
  album_result_list = []

  queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
  if queryset_list1.exists():
      for queryset in queryset_list1:
        title_result_list.append({
          'song_id' : queryset.song_id,
          'song_name' : queryset.song_name,
          'artist' : queryset.artist,
          'album' : queryset.album,
          'Like_Count' : queryset.Like_Count,
          'Lyric' : queryset.Lyric,
          'cover_url' : queryset.cover_url,
          'tags' : queryset.tags,
          'year' : queryset.year,
        })
  else:
    title_result_list.append(None) 

  queryset_list2 = Song.objects.filter(artist__icontains = f'{search_word}') 
  if queryset_list2.exists():
      for queryset in queryset_list2:
        artist_result_list.append({
          'song_id' : queryset.song_id,
          'song_name' : queryset.song_name,
          'artist' : queryset.artist,
          'album' : queryset.album,
          'Like_Count' : queryset.Like_Count,
          'Lyric' : queryset.Lyric,
          'cover_url' : queryset.cover_url,
          'tags' : queryset.tags,
          'year' : queryset.year,
        })
  else:
    artist_result_list.append(None) 

  queryset_list3 = Song.objects.filter(album__icontains = f'{search_word}') 
  if queryset_list3.exists():
      for queryset in queryset_list3:
        album_result_list.append({
          'song_id' : queryset.song_id,
          'song_name' : queryset.song_name,
          'artist' : queryset.artist,
          'album' : queryset.album,
          'Like_Count' : queryset.Like_Count,
          'Lyric' : queryset.Lyric,
          'cover_url' : queryset.cover_url,
          'tags' : queryset.tags,
          'year' : queryset.year,
        })
  else:
    album_result_list.append(None) 

  context = {
    "song_name" :  title_result_list,
    "artist" : artist_result_list,
    "album" : album_result_list
  }
  return JsonResponse(context , status = 200)