from rest_framework import routers, serializers, viewsets

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Tag, Song_without_year, Top11, Top11_like100

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', "id", "username", "password", "email", "first_name", "last_name", "is_active", "last_login", "is_superuser", "date_joined", "is_staff"]


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ['url', 'song_id', 'song_name', 'artist', 'album', 'Like_Count', 'Lyric', 'cover_url', 'tags', 'year']

class Latest_100Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Latest_100
        fields = ['url', 'Topic', 'Percentage', 'song_id', 'song_name', 'artist', 'album', 'Like_Count', 'Lyric', 'cover_url', 'tags', 'year', ]

class Song_without_yearSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song_without_year
        fields = ['url', 'Topic', 'Percentage', 'song_id', 'song_name', 'artist', 'album', 'Like_Count', 'Lyric', 'cover_url', 'tags']

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ['url', 'category_id', 'category_name', 'tag_id', 'tag_name', 'tag_name_en']

class Top11Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Top11
        fields = ['url', 'id', 'word', 'freq', 'year']

class Top11_like100Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Top11_like100
        fields = ['url', 'id', 'word', 'freq', 'year']

# class Tag_variableSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Tag_variable
#         fields = ['url', 'variable_id', 'variable_name', 'variable_name_en', 'tag_id']