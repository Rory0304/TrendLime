from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song

from search.serializers import UserSerializer, SongSerializer

# Create your views here.

def search(request):
  # a = json.loads(request.body)
  # print('a',a)
  search_word = json.loads(request.body)['q']

  # 다른 옵션을 추가로 검색을 할 경우
  selected_tag = json.loads(request.body)['selected_tag']
  fieldname_icontains = selected_tag + '__icontains'
  print('fieldname_icontains',fieldname_icontains)
  tag_content = json.loads(request.body)['tag_content']
  # 아래의 queryset_list와 and 혹은 or로 붙여서 검색
  # Song.objects.filter(f'{selected_tag}'__icontains = f'{tag_content}')

  result_list=[]
  queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
  queryset_list2 = Song.objects.filter(**{fieldname_icontains : tag_content})
  queryset_list =queryset_list1 & queryset_list2

  if queryset_list.exists():
    for queryset in queryset_list:
      result_list.append({
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
    result_list.append(None) 
  context = {"result" : result_list}
  return JsonResponse(context, status = 200)


# DRF views
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer