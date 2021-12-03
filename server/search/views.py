from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Category, Tag, Song_without_year, Top11, Top11_like100

from search.serializers import UserSerializer, SongSerializer, TagSerializer, Song_without_yearSerializer, Top11Serializer, Top11_like100Serializer

# Create your views here.

def search(request):
  result_list=[]
  # 제목 관련 키워드 입력
  search_word =request.GET.get("q")
  # 다른 옵션을 추가 선택
  selected_tag = request.GET.get("category") 
  tag_content = request.GET.get("tag") 

  # 카테고리 선택을 하지 않은 경우 임의로 카테고리 선택(에러 방지)
  if not selected_tag:
    selected_tag = "tags"
  fieldname_icontains = selected_tag + '__icontains'

  # 트렌드/연도 카테고리를 선택하면 트렌드 + 1940~2010년대 태그가 나오고 
  if selected_tag == "trend":
    # 트랜드/연도 카테고리의 트랜드 태그를 누르면 ....... 어떤게 나오지???
    if tag_content == "trend":
      # 트렌드 관련된 데이터 보여주기
      queryset_list = Top11_like100.objects.all() #filter(year__icontains = f'{tag_content}') 

      for queryset in queryset_list:
        result_list.append({
          'word' : queryset.word,
          'freq' : queryset.freq,
          'year' : queryset.year
        })
      context = { result_list}
    else:
    # 연도 태그를 누르면 토픽에 대한 워드 클라우드와 top10 단어 리스트
      words_and_freq = []
      represent_songs = []

      queryset_list = Top11_like100.objects.filter(year__icontains = f'{tag_content}') 
      for queryset in queryset_list:
        words_and_freq.append({
          'word' : queryset.word,
          'freq' : queryset.freq,
          'year' : queryset.year
        })

      # 연도별 대표곡 출력 -> 좋아요 순으로 출력되게 하려면 데이터 수정 필요!
      represent_song_queryset_list = Song.objects.filter(year__icontains = f'{tag_content}') #.sort_by('-Like_Count')
      if represent_song_queryset_list.exists():
        for queryset in represent_song_queryset_list:
          represent_songs.append({
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
        represent_songs.append(None) 

    context = { 
      'words_and_freq' : words_and_freq,
      'represent_songs' : represent_songs 
    }
    print('1111111',context)
  # 트랜드/얀도 카테고리 외의 카테고리를 선택하면 일반적인 태그에 따라 필터링된 곡의 정보 표시
  else:
    queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
    # print('q1',queryset_list1)
    queryset_list2 = Song.objects.filter(**{fieldname_icontains : tag_content})
    # print('q2',queryset_list2)
    # 아래의 queryset_list와 and 혹은 or로 붙여서 검색
    # Song.objects.filter(f'{selected_tag}'__icontains = f'{tag_content}')

    # queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
    # queryset_list2 = Song.objects.filter(**{fieldname_icontains : tag_content})
    # queryset_list3 = Song_without_year.objects.filter(song_name__icontains = f'{search_word}') 
    # queryset_list4 = Song_without_year.objects.filter(**{fieldname_icontains : tag_content})

    if queryset_list2:
      queryset_list = (queryset_list1 & queryset_list2).order_by('-Like_Count')#, 'year')
    else : 
      queryset_list = queryset_list1.order_by('-Like_Count')#, 'year')
    print('result_count', queryset_list.count())
    print('result', queryset_list)

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


def categories_and_tags(request):
  result_list = []
  category_list = []
  tag_list =[]
  category_queryset = Category.objects.all()
  for data in category_queryset:
    category_list.append({
      'category_id' : data.category_id,
      'category_name' : data.category_name
    })
  tag_queryset = Tag.objects.all()
  for data in tag_queryset:
    tag_list.append({
      'category_id' : data.category_id,
      'category_name' : data.category_name,
      'tag_id' : data.tag_id,
      'tag_name' : data.tag_name,
      'tag_name_en' : data.tag_name_en,
    })
  result_list = { 
    'categories' : category_list,
    'tags' : tag_list
  }
  return JsonResponse(result_list, status=200)

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

class Top11ViewSet(viewsets.ModelViewSet):
  queryset = Top11.objects.all().order_by('id')
  serializer_class = Top11Serializer

class Top11_like100ViewSet(viewsets.ModelViewSet):
  queryset = Top11_like100.objects.all().order_by('id')
  serializer_class = Top11_like100Serializer
