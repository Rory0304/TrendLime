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
  search_word = json.loads(request.body)['q']
  print('1',search_word)
  # search_word를 확인 하고 검색어 특정할 것
  result_list=[]
  queryset_list = Song.objects.filter(song_name__icontains = f'{search_word}')
  # queryset_list = Song.objects.filter(song_name= search_word)
  # # query_result = db.session.query(Song).filter(Song.song_name.like(f"%{search_word}%"))
  print('queryset_list',queryset_list)

  # 1 안
  if Song.objects.filter(song_name__contains= '${search_word}').exists():
    # queryset_list = Song.objects.all()
    queryset_list = Song.objects.filter(song_name__contains= '${search_word}')
    print('queryset_list',queryset_list)
    for queryset in queryset_list:
      print('queryset',queryset)
      for data in queryset:
        print('data',data)
        result_list.append({
          'song_id' : data[0],
          'song_name' : data[1],
          'artist' : data[2],
          'album' : data[3],
          'Like_Count' : data[4],
          'Lyric' : data[5],
          'cover_url' : data[6],
          'tags' : data[7],
          'year' : data[8]
        })
  else:
    print('2')
    result_list.append(None) 

  context = {"result" : result_list}

  # 2 안
  # cursor = connection.cursor()
  # print('cursor',cursor)
  # query_stmt = ('db.tb_song.find({"song_name":/{}/})'.format(search_word))

  # print('query_stmt',query_stmt)
  # query_result = cursor.execute(query_stmt)
  # connection.commit()
  # connection.close()
  # print('query_result',query_result)

  return JsonResponse(context, status = 200)


# DRF views
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer