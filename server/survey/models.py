from django.db import models
# from django.url import reverse

# Create your models here.
class Question(models.Model):
  category_id = models.CharField(max_length=50) #int [pk, increment] //auto-increment
  category = models.CharField(max_length=50)
  question = models.CharField(max_length=200)
  required = models.BooleanField(max_length=50)

  class Meta:
    verbose_name = 'question'
    verbose_name_plural = 'questions'
    db_table = 'tb_question'
    # ordering = 'category_id'

  def __str__(self):
    return self.category


class Option(models.Model):
  option_id = models.CharField(max_length=50)
  category_id = models.CharField(max_length=50)
  option = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'option'
    verbose_name_plural = 'options'
    db_table = 'tb_option'
    # ordering = 'category_id'

  def __str__(self):
    return self.option


class User_history(models.Model):
  history_id = models.CharField(max_length=50)
  survey_date = models.DateField(auto_now_add=True)
  user_id = models.CharField(max_length=50)
  category_id = models.CharField(max_length=50)
  option_id = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'user_history'
    db_table = 'tb_user_history'
    # ordering = 'category_id'

  def __str__(self):
    return self.survey_date


class Recommendation_result(models.Model):
  result_id = models.CharField(max_length=50)
  survey_date = models.DateField(auto_now_add=False)
  result_date = models.DateField(auto_now_add=True)
  user_id = models.CharField(max_length=50)
  recommed_song = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'recommendation_result'
    db_table = 'tb_recommendation_result'
    # ordering = 'category_id'

  def __str__(self):
    return self.result_date


class Song(models.Model):
  song_id = models.CharField(max_length=50)
  singer = models.CharField(max_length=50)
  song_name = models.CharField(max_length=50)
  artist = models.CharField(max_length=50)
  album = models.CharField(max_length=50)
  Like_Count = models.CharField(max_length=50)
  Lyric = models.CharField(max_length=50)
  cover_url = models.CharField(max_length=50)
  words = models.CharField(max_length=50)
  label = models.CharField(max_length=50)
  youtube_url = models.CharField(max_length=50)
  exciting = models.CharField(max_length=50)
  ballad = models.CharField(max_length=50)
  grooved = models.CharField(max_length=50)
  emotional = models.CharField(max_length=50)
  acoustic = models.CharField(max_length=50)
  electronic = models.CharField(max_length=50)
  sweet = models.CharField(max_length=50)
  dreamy = models.CharField(max_length=50)
  strong = models.CharField(max_length=50)
  windless = models.CharField(max_length=50)
  oldies = models.CharField(max_length=50)
  sad = models.CharField(max_length=50)
  sensual = models.CharField(max_length=50)
  sexy = models.CharField(max_length=50)
  lonesome = models.CharField(max_length=50)
  soulful = models.CharField(max_length=50)
  refreshing = models.CharField(max_length=50)
  spring = models.CharField(max_length=50)
  summer = models.CharField(max_length=50)
  autumn = models.CharField(max_length=50)
  winter = models.CharField(max_length=50)
  morning = models.CharField(max_length=50)
  afternoon = models.CharField(max_length=50)
  dinner = models.CharField(max_length=50)
  night_dawn = models.CharField(max_length=50)
  sunny = models.CharField(max_length=50)
  rain_cloudy = models.CharField(max_length=50)
  snowy = models.CharField(max_length=50)
  after_rain_clear = models.CharField(max_length=50)
  cool = models.CharField(max_length=50)
  chilly = models.CharField(max_length=50)
  drive = models.CharField(max_length=50)
  exercise_health = models.CharField(max_length=50)
  on_the_way_to_school = models.CharField(max_length=50)
  on_the_way_home = models.CharField(max_length=50)
  relaxation_meditation = models.CharField(max_length=50)
  club_party = models.CharField(max_length=50)
  cafe = models.CharField(max_length=50)
  karaoke = models.CharField(max_length=50)
  in_the_reading_room = models.CharField(max_length=50)
  walk_trip = models.CharField(max_length=50)
  office = models.CharField(max_length=50)
  select_shop_store = models.CharField(max_length=50)
  hotel_bar = models.CharField(max_length=50)
  before_sleeping = models.CharField(max_length=50)
  marriage = models.CharField(max_length=50)
  festival = models.CharField(max_length=50)
  fashion_show = models.CharField(max_length=50)
  eat_alone = models.CharField(max_length=50)
  when_studying = models.CharField(max_length=50)
  love_joy = models.CharField(max_length=50)
  farewell_sad = models.CharField(max_length=50)
  stress_irritability = models.CharField(max_length=50)
  when_depressed = models.CharField(max_length=50)
  when_you_are_tired = models.CharField(max_length=50)
  mental_anxiety = models.CharField(max_length=50)
  longing = models.CharField(max_length=50)
  when_youre_lonely = models.CharField(max_length=50)
  confession = models.CharField(max_length=50)
  when_you_want_to_cry = models.CharField(max_length=50)
  dawn = models.CharField(max_length=50)
  bubbly = models.CharField(max_length=50)
  excitement_heart = models.CharField(max_length=50)
  diversion = models.CharField(max_length=50)
  healing = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'song'
    verbose_name_plural = 'songs'
    db_table = 'tb_song'
    # ordering = 'category_id'

  def __str__(self):
    return self.song_id