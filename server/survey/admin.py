from django.contrib import admin
from survey.models import Question, User_history, Recommendation_result, Song

# Register your models here.
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
  list_display = ('category_id', 'category', 'question', 'option', 'required')


# @admin.register(Option)
# class OptionAdmin(admin.ModelAdmin):
#   list_display = ('option_id', 'category_id', 'option')


@admin.register(User_history)
class User_historyAdmin(admin.ModelAdmin):
  list_display = ('history_id', 'survey_date','user_id', 'category_id', 'option_id')


@admin.register(Recommendation_result)
class Recommendation_resultAdmin(admin.ModelAdmin):
  list_display = ('result_id', 'survey_date', 'result_date', 'user_id', 'recommed_song',)


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
  list_display = ("song_id", "song_name", "artist", "album", "Like_Count", "Lyric", "cover_url", "youtube_url", "exciting", "ballad", "grooved", "emotional", "acoustic", "electronic", "sweet", "dreamy", "strong", "windless", "oldies", "sad", "sensual", "sexy", "lonesome", "soulful", "refreshing", "spring", "summer", "autumn", "winter", "morning", "afternoon", "dinner", "night_dawn", "sunny", "rain_cloudy", "snowy", "after_rain_clear", "cool", "chilly", "drive", "exercise_health", "on_the_way_to_school", "on_the_way_home", "relaxation_meditation", "club_party", "cafe", "karaoke", "in_the_reading_room", "walk_trip", "office", "select_shop_store", "hotel_bar", "before_sleeping", "marriage", "festival", "fashion_show", "eat_alone", "when_studying", "love_joy", "farewell_sad", "stress_irritability", "when_depressed", "when_you_are_tired", "mental_anxiety", "longing", "when_youre_lonely", "something", "ask_out", "when_you_want_to_cry", "dawn", "bubbly", "excitement_heart", "diversion", "healing" )



