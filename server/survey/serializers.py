from rest_framework import serializers
from survey.models import Question, Option, User_history, Recommendation_result, Song

class QuestionSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Question # 모델 설정 
    fields = ('id','category_id', 'category', 'question', 'required') # 필드 설정


class OptionSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Option # 모델 설정 
    fields = ('id', 'option_id', 'category_id', 'option')


class User_historySerializer(serializers.ModelSerializer):
  class Meta: 
    model = User_history # 모델 설정 
    fields = ('id', 'history_id', 'survey_date','user_id', 'category_id', 'option_id')


class Recommendation_resultSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Recommendation_result # 모델 설정 
    fields = ('id', 'result_id', 'survey_date', 'result_date', 'user_id', 'recommed_song',)


class SongSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Song # 모델 설정 
    fields = ("id", "song_id", "song_name", "artist", "album", "Like_Count", "Lyric", "cover_url", "words", "label", "youtube_url", "exciting", "ballad", "grooved", "emotional", "acoustic", "electronic", "sweet", "dreamy", "strong", "windless", "oldies", "sad", "sensual", "sexy", "lonesome", "soulful", "refreshing", "spring", "summer", "autumn", "winter", "morning", "afternoon", "dinner", "night_dawn", "sunny", "rain_cloudy", "snowy", "after_rain_clear", "cool", "chilly", "drive", "exercise_health", "on_the_way_to_school", "on_the_way_home", "relaxation_meditation", "club_party", "cafe", "karaoke", "in_the_reading_room", "walk_trip", "office", "select_shop_store", "hotel_bar", "before_sleeping", "marriage", "festival", "fashion_show", "eat_alone", "when_studying", "love_joy", "farewell_sad", "stress_irritability", "when_depressed", "when_you_are_tired", "mental_anxiety", "longing", "when_youre_lonely", "something", "ask_out", "when_you_want_to_cry", "dawn", "bubbly", "excitement_heart", "diversion", "healing" )


