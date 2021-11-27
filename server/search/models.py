from django.db import models

# Create your models here.

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
        * tags : 태그들 
            - exciting (string) : 신나는
            - ballad (string) : 발라드한
            - grooved (string) : 그루브한
            - emotional (string) : 감성적인
            - acoustic (string) : 어쿠스틱한
            - electronic (string) : 일렉트로닉
            - sweet (string) : 달달한
            - dreamy (string) : 몽환적인
            - strong (string) : 강한
            - windless (string) : 잔잔한
            - oldies (string) : 올디스
            - sad (string) : 애절한
            - sensual (string) : 감각적인
            - sexy (string) : 섹시한
            - lonesome (string) : 쓸쓸한
            - soulful (string) : 소울풀한
            - refreshing (string) : 청량한
            - spring (string) : 봄
            - summer (string) : 여름
            - autumn (string) : 가을
            - winter (string) : 겨울
            - morning (string) : 아침
            - afternoon (string) : 오후
            - dinner (string) : 저녁
            - night_dawn (string) : 밤/새벽
            - sunny (string) : 화창한날
            - rain_cloudy (string) : 비/흐림
            - snowy (string) : 눈오는날
            - after_rain_clear (string) : 비온후/맑게갠
            - cool (string) : 선선한
            - chilly (string) : 쌀쌀한
            - drive (string) : 드라이브
            - exercise_health (string) : 운동/헬스
            - on_the_way_to_school (string) : 등교/출근길
            - on_the_way_home (string) : 하교/퇴근길
            - relaxation_meditation (string) : 휴식/명상
            - club_party (string) : 클럽/파티
            - cafe (string) : 카페
            - karaoke (string) : 노래방
            - in_the_reading_room (string) : 산책/여행
            - walk_trip (string) : 사무실
            - office (string) : 편집숍/매장
            - select_shop_store (string) : 독서방안에서
            - hotel_bar (string) : 호텔/바
            - before_sleeping (string) : 잠들기전
            - marriage (string) : 결혼
            - festival (string) : 페스티벌
            - fashion_show (string) : 패션쇼
            - eat_alone (string) : 혼술혼밥
            - when_studying (string) : 공부할때
            - love_joy (string) : 사랑/기쁨
            - farewell_sad (string) : 이별/슬픔
            - stress_irritability (string) : 스트레스/짜증
            - when_depressed (string) : 우울할때
            - when_you_are_tired (string) : 지치고힘들때
            - mental_anxiety (string) : 멘붕/불안
            - longing (string) : 그리움
            - when_youre_lonely (string) : 외로울때
            - something (string) : 썸탈때
            - ask_out (string) : 고백
            - when_you_want_to_cry (string) : 울고싶을때
            - dawn (string) : 새벽감성
            - bubbly (string) : 싱숭생숭
            - excitement_heart (string) : 설렘/심쿵
            - diversion (string) : 기분전환
            - healing (string) : 힐링
        * year : 발매년도
  """     
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  album = models.CharField(max_length=100)
  Like_Count = models.CharField(max_length=50)
  Lyric = models.CharField(max_length=500)
  cover_url = models.CharField(max_length=200)
  # youtube_url = models.CharField(max_length=200)
  tags = models.CharField(max_length=500)
  year = models.CharField(max_length=4)

  class Meta:
    verbose_name = 'song'
    verbose_name_plural = 'songs'
    db_table = 'tb_song'
    # ordering = 'song_name'

  def __str__(self):
    return self.song_id

'''
-User-

{ 
  "_id" : ObjectId("619c7b9dea1a98014163fdac"), 
  "id" : 1, 
  "password" : "pbkdf2_sha256$260000$m4cAhqddW0OcKdQftP94ad$jRWaz9zKIQGWrEqSDzc/cFAr/qw37/acAhPHxxXioW0=", 
  "last_login" : ISODate("2021-11-23T14:27:07.667Z"), 
  "is_superuser" : true, 
  "username" : "admin", 
  "first_name" : "", 
  "last_name" : "", 
  "email" : "", 
  "is_staff" : true, 
  "is_active" : true, 
  "date_joined" : ISODate("2021-11-23T14:26:53.696Z") }
'''