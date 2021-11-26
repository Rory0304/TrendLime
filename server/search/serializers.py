from rest_framework import routers, serializers, viewsets

from django.contrib.auth.models import User
from search.models import Song

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ['song_id', 'song_name', 'artist', 'album', 'Like_Count', 'Lyric', 'cover_url', 'tags']
