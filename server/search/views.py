from django.shortcuts import render
from rest_framework import viewsets

from django.contrib.auth.models import User
from search.models import Song

from search.serializers import UserSerializer, SongSerializer

# Create your views here.
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer