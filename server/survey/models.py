from django.db import models
from django.contrib.auth.models import User
# from django.url import reverse

# Create your models here.

class Question(models.Model):
  """
    Attributes:
        * category_id (int) : 카테고리 id (F.K - )
        * category (string) : 카테고리
        * question (string) : 질문
        * option (string) : 선택지
        * required (boolean) : 필수질문여부
  """
  category_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='CATEGORY_ID') #int [pk, increment] //auto-increment
  category = models.CharField(max_length=50)
  question = models.CharField(max_length=200)
  option = models.CharField(max_length=50)
  required = models.BooleanField(max_length=50)

  class Meta:
    verbose_name = 'question'
    verbose_name_plural = 'questions'
    db_table = 'tb_question'
    # ordering = 'category_id'

  def __str__(self):
    return self.category


# class Option(models.Model):
#   """
#     Attributes:
#         * option_id (int) : 선택지 ID
#         * category_id (string) : 카테고리 ID (F.K - Question.category_id)
#         * option (string) : 선택지
#   """
#   option_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='OPTION_ID')
#   category_id = models.CharField(max_length=50)
#   # category_id = models.ForeignKey(Question)
#   option = models.CharField(max_length=50)

#   class Meta:
#     verbose_name = 'option'
#     verbose_name_plural = 'options'
#     db_table = 'tb_option'
#     # ordering = 'category_id'

#   def __str__(self):
#     return self.option


class User_history(models.Model):
  """
    Attributes:
        * history_id (string) : 설문결과 ID
        * survey_date (datetime) : 설문응답날짜시간
        * user_id (string) : 사용자 ID (F.K - User.id)
        * category_id (string) : 질문 ID
        * option_id (string) : 선택지 ID
  """
  history_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='HISTORY_ID')
  survey_date = models.DateTimeField(auto_now_add=True)
  user_id = models.CharField(max_length=50)
  # user_id = models.ForeignKey(User, on_delete=models.CASCADE) # User 모델을 ForeignKey로 적용하여 선언. on_delete=models.CASCADE는 계정이 삭제되면 이 계정이 작성한 질문을 모두 삭제하라는 의미
  category_id = models.CharField(max_length=50)
  option_id = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'user_history'
    db_table = 'tb_user_history'
    # ordering = 'survey_date'

  def __str__(self):
    return self.survey_date


class Recommendation_result(models.Model):
  """
    Attributes:
        * result_id (string) : 추천결과 ID
        * survey_date (datetime) : 설문날짜시각
        * result_date (datetime) : 결과날짜시각
        * user_id (string) : 사용자 ID (F.K - User.id)
        * recommed_song (string) : 추천곡
  """
  result_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='RESULT_ID')
  survey_date = models.DateTimeField(auto_now_add=False)
  result_date = models.DateTimeField(auto_now_add=True)
  user_id = models.CharField(max_length=50)
  # user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  recommed_song = models.CharField(max_length=50)

  class Meta:
    verbose_name = 'recommendation_result'
    db_table = 'tb_recommendation_result'
    # ordering = 'result_date'

  def __str__(self):
    return self.result_date


class Song(models.Model):  
  """
    Attributes:
        * song_id (string) : song_id
        * song_name (string) : 노래제목
        * artist (string) : 가수
        * album (string) : 앨범
        * Like_Count (string) : 좋아요수
        * Lyric (string) : 가사
        * cover_url (string) : 앨범커버
        * youtube_url (string) : 유튜브주소
        * exciting (string) : 신나는
        * ballad (string) : 발라드한
        * grooved (string) : 그루브한
        * emotional (string) : 감성적인
        * acoustic (string) : 어쿠스틱한
        * electronic (string) : 일렉트로닉
        * sweet (string) : 달달한
        * dreamy (string) : 몽환적인
        * strong (string) : 강한
        * windless (string) : 잔잔한
        * oldies (string) : 올디스
        * sad (string) : 애절한
        * sensual (string) : 감각적인
        * sexy (string) : 섹시한
        * lonesome (string) : 쓸쓸한
        * soulful (string) : 소울풀한
        * refreshing (string) : 청량한
        * spring (string) : 봄
        * summer (string) : 여름
        * autumn (string) : 가을
        * winter (string) : 겨울
        * morning (string) : 아침
        * afternoon (string) : 오후
        * dinner (string) : 저녁
        * night_dawn (string) : 밤/새벽
        * sunny (string) : 화창한날
        * rain_cloudy (string) : 비/흐림
        * snowy (string) : 눈오는날
        * after_rain_clear (string) : 비온후/맑게갠
        * cool (string) : 선선한
        * chilly (string) : 쌀쌀한
        * drive (string) : 드라이브
        * exercise_health (string) : 운동/헬스
        * on_the_way_to_school (string) : 등교/출근길
        * on_the_way_home (string) : 하교/퇴근길
        * relaxation_meditation (string) : 휴식/명상
        * club_party (string) : 클럽/파티
        * cafe (string) : 카페
        * karaoke (string) : 노래방
        * in_the_reading_room (string) : 산책/여행
        * walk_trip (string) : 사무실
        * office (string) : 편집숍/매장
        * select_shop_store (string) : 독서방안에서
        * hotel_bar (string) : 호텔/바
        * before_sleeping (string) : 잠들기전
        * marriage (string) : 결혼
        * festival (string) : 페스티벌
        * fashion_show (string) : 패션쇼
        * eat_alone (string) : 혼술혼밥
        * when_studying (string) : 공부할때
        * love_joy (string) : 사랑/기쁨
        * farewell_sad (string) : 이별/슬픔
        * stress_irritability (string) : 스트레스/짜증
        * when_depressed (string) : 우울할때
        * when_you_are_tired (string) : 지치고힘들때
        * mental_anxiety (string) : 멘붕/불안
        * longing (string) : 그리움
        * when_youre_lonely (string) : 외로울때
        * something (string) : 썸탈때
        * ask_out (string) : 고백
        * when_you_want_to_cry (string) : 울고싶을때
        * dawn (string) : 새벽감성
        * bubbly (string) : 싱숭생숭
        * excitement_heart (string) : 설렘/심쿵
        * diversion (string) : 기분전환
        * healing (string) : 힐링
  """     
  song_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='SONG_ID')
  song_name = models.CharField(max_length=50)
  artist = models.CharField(max_length=50)
  album = models.CharField(max_length=50)
  Like_Count = models.CharField(max_length=50)
  Lyric = models.CharField(max_length=50)
  cover_url = models.CharField(max_length=50)
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

'''
-User-
id
password
last_login
is_superuser
username
first_name
last_name
email
is_staff
is_active
date_joined
groups
user_permissions
'''