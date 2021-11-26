from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
import json

from django.contrib.auth.models import User
from search.models import Song

from search.serializers import UserSerializer, SongSerializer

# Create your views here.

def search(request):
  search_word = json.loads(request.body)
  result_list=[]

  queryset = Song.objects.filter(컬럼명__icontains=search_word)[0:20]
  if queryset:
    for data in queryset:
      result_list.append({
        'song_id' : data[0],
        'song_name' : data[1],
        'artist' : data[2],
        'album' : data[3],
        'Like_Count' : data[4],
        'Lyric' : data[5],
        'cover_url' : data[6]
        # 'tags' : data[7]
      })
  else:
    result_list.append(None)

  context = {"result" : result_list}
  return JsonResponse(context, status = 200)



# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer