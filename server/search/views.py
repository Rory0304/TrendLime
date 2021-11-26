from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
import json

from django.contrib.auth.models import User
from search.models import Song

from search.serializers import UserSerializer, SongSerializer

# Create your views here.

def search(request):
  search_word = json.loads(request.body)['q']
  print(search_word)
  # search_word를 확인 하고 검색어 특정할 것
  result_list=[]
  queryset_list = list(Song.objects.filter(song_name = '${search_word}'))[0:20]
  print('queryset_list',queryset_list)

  if Song.objects.filter(song_id = '${search_word}').exists():
    # queryset_list = Song.objects.all()
    queryset_list = list(Song.objects.filter(song_name = '${search_word}'))
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
          'tags' : data[7]
        })
  else:
    print('2')
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