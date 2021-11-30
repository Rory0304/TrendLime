from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Tag, Song_without_year

from search.serializers import UserSerializer, SongSerializer, TagSerializer, Song_without_yearSerializer

# Create your views here.

def search(request):
  search_word = json.loads(request.body)['q']
  # 다른 옵션을 추가로 검색을 할 경우
  selected_tag = json.loads(request.body)['category']
  if not selected_tag:
    selected_tag = "tags"

  fieldname_icontains = selected_tag + '__icontains'
  tag_content = json.loads(request.body)['tag']
  # 아래의 queryset_list와 and 혹은 or로 붙여서 검색
  # Song.objects.filter(f'{selected_tag}'__icontains = f'{tag_content}')

  result_list=[]
  # queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
  # queryset_list2 = Song.objects.filter(**{fieldname_icontains : tag_content})
  queryset_list3 = Song_without_year.objects.filter(song_name__icontains = f'{search_word}') 
  queryset_list4 = Song_without_year.objects.filter(**{fieldname_icontains : tag_content})

  if queryset_list2:
    queryset_list = (queryset_list3 & queryset_list4).order_by('-Like_Count')#, 'year')
  else : 
    queryset_list = queryset_list3.order_by('-Like_Count')#, 'year')

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
        # 'year' : queryset.year,
      })
  else:
    result_list.append(None) 
  context = {"result" : result_list}
  return JsonResponse(context, status = 200)

# def get_category_and_tags(request):
#   selected_category = json.loads(request.body)['select_category']
#   print('selected_category',selected_category)
#   result_list=[]

#   queryset_list = Tag.objects.filter(tag_name__icontains = f'{selected_category}')
#   print('queryset_list',queryset_list)
#   if queryset_list.exists:
#     for queryset in queryset_list:
#       result_list.append({
#         'tag_name' : queryset.tag_name,
#         'variable_name' : queryset.variable_name
#       })
#   else:
#     result_list.append(None) 

#   context = {"result" : result_list}
#   return JsonResponse(context, status = 200)


# DRF views
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer

class Song_without_yearViewSet(viewsets.ModelViewSet):
  queryset = Song_without_year.objects.all()
  serializer_class = Song_without_yearSerializer

class TagViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer


# class Tag_variableViewSet(viewsets.ModelViewSet):
#   queryset = Tag_variable.objects.all()
#   serializer_class = Tag_variableSerializer