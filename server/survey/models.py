from django.db import models
# from django.url import reverse

# Create your models here.

class Question(models.Model):
  '''
  category_id
  카테고리 cateogry
  질문 question
  필수질문여부 required
  '''
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
  '''
  option_id
  카테고리 아이디 category_id
  옵션 아이디 option
  '''
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
  '''
  history_id
  설문응답날짜시간 survey_date
  사영자id user_id
  질문id category_id
  답변id option_id
  '''
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
  '''
  result_id
  survey_date
  result_date
  user_id
  recommed_song
  '''
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
  '''         
  song_id 
  노래제목         song_name
  가수            artist
  앨범            album
  좋아요수         Like_Count
  가사            Lyric
  앨범커버         cover_url
  단어            words
  유튜브주소        youtube_url
  - 뮤직 스타일         
  신나는           exciting
  발라드한         ballad 
  그루브한         grooved  
  감성적인         emotional  
  어쿠스틱한       acoustic    
  일렉트로닉       electronic     
  달달한          sweet  
  몽환적인         dreamy
  강한            strong  
  잔잔한           windless   
  올디스          oldies 
  애절한          sad
  감각적인         sensual 
  섹시한          sexy
  쓸쓸한          lonesome
  소울풀한         soulful
  청량한          refreshing
  - 계절          
  봄             spring
  여름            summer
  가을            autumn
  겨울            winter
  - 시간          
  아침            morning
  오후            afternoon
  저녁            dinner
  밤/새벽         night_dawn
  - 날씨          
  화창한날         sunny
  비/흐림         rain_cloudy
  눈오는날         snowy
  비온후/맑게갠     after_rain_clear   
  선선한          cool
  쌀쌀한          chilly
  - 상황/장소         
  드라이브         drive
  운동/헬스        exercise_health 
  등교/출근길       on_the_way_to_school  
  하교/퇴근길       on_the_way_home  
  휴식/명상         relaxation_meditation
  클럽/파티         club_party
  카페            cafe
  노래방          karaoke
  산책/여행        in_the_reading_room 
  사무실          walk_trip
  편집숍/매장      office   
  독서방안에서      select_shop_store    
  호텔/바         hotel_bar
  잠들기전         before_sleeping 
  결혼            marriage
  페스티벌         festival 
  패션쇼          fashion_show
  혼술혼밥         eat_alone 
  공부할때         when_studying 
  - 감정/기분         
  사랑/기쁨        love_joy 
  이별/슬픔         farewell_sad
  스트레스/짜증      stress_irritability   
  우울할때          when_depressed
  지치고힘들때       when_you_are_tired   
  멘붕/불안        mental_anxiety 
  그리움          longing
  외로울때         when_youre_lonely 
  썸탈때          something
  고백            ask_out
  울고싶을때        when_you_want_to_cry
  새벽감성          dawn
  싱숭생숭          bubbly
  설렘/심쿵         excitement_heart
  기분전환          diversion
  힐링          healing
  '''         
  song_id = models.CharField(max_length=50)
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
  something = models.CharField(max_length=50)
  ask_out = models.CharField(max_length=50)
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