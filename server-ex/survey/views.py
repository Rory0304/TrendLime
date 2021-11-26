from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random

from rest_framework import permissions, viewsets
from survey.models import Question, User_history, Recommendation_result, Song
from survey.serializers import QuestionSerializer, User_historySerializer, Recommendation_resultSerializer, SongSerializer, UserSerializer, GroupSerializer
from accounts.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required

# Create your views here.
@csrf_exempt
def get(request):
  """
    필수질문 세 개와 비필수질문을 사용자에게 출제하는데
    카테고리에 맞는 선택지를 랜덤으로 골라서 사용자에게 보여줌
  """
  if request.method == 'GET':
    require = []

    for i in range(1,4):
      require_queryset = Question.objects.filter(category_id=i)
      if require_queryset:
        for data in require_queryset:
          require.append({
            "category": data.category,
            "cateogory_key": data.category_id,
            "question": data.question,
            "options": data.option,
            "require": True
          })
  
    # 선택 설문에 대한 갯수 출제 방식이 정확하지 않음
    optional = []
    # for i in range(3,6):       # 아직 작성 다 안함
    a = random.randint(3,6)
    optional_queryset = Question.objects.filter(category_id=a)

    if optional_queryset:
      for data in optional_queryset:
        optional.append({
          "category": data.category,
          "cateogory_key": data.category_id,
          "question": data.question,
          "options": data.option,
          "require": False
        })

    surveySheet = {
      "require": require,
      "optional": optional
    }

  else:
    surveySheet = {"result": None}
  return JsonResponse(surveySheet, status=200) 


@csrf_exempt
def post(request):
  """
    설문결과를 받으면 저장하고 그 결과에 맞는 노래를 추천함 그리고 그 추천결과도 저장함
  """
  if request.method == 'POST':
    data = json.loads(request.body)
    print('postData',data)
    # 유저 히스토리 db에 결과 저장 - 프론트에서 넘어오는 방식 협의할 것
    # User_history.objects.create(user_id, category_id=data.category_id, option_id=data.option_id)   
    # 받은 설문 파일로 알맞은 음악 검색 및 결과 저장- 
    # recommend_result = Song.objects.filter()
    # for data in recommend_result:

    # Recommendation_result.objects.create(survey_date,user_id,recommed_song)
    # recommend = []
    # if recommend_result:
    #   for data in recommend_result:
    #     recommend.append({
    #       'result_id' : result_id,
    #       'survey_date' : survey_date,
    #       'result_date' : result_date,
    #       'user_id' : user_id,
    #       'recommed_song' : recommed_song
    #     })
    # context = {"result": recommend}
    context = {"result": "data sent"}
    return JsonResponse(context, status=200)#, safe=False)
  else:
    context = {"result": None}
    return JsonResponse(context, status=209)#, safe=False)



@csrf_exempt
class QuestionViewSet(viewsets.ModelViewSet): 
  queryset = Question.objects.all() 
  serializer_class = QuestionSerializer


# @csrf_exempt
# class OptionViewSet(viewsets.ModelViewSet): 
#   queryset = Option.objects.all() 
#   serializer_class = OptionSerializer


@csrf_exempt
@login_required
class User_historyViewSet(viewsets.ModelViewSet): 
  queryset = User_history.objects.all().order_by('-survey_date')
  serializer_class = User_historySerializer


@csrf_exempt
class Recommendation_resultViewSet(viewsets.ModelViewSet): 
  queryset = Recommendation_result.objects.all().order_by('-result_date') 
  serializer_class = Recommendation_resultSerializer


@csrf_exempt
class SongViewSet(viewsets.ModelViewSet): 
  queryset = Song.objects.all() 
  serializer_class = SongSerializer


@csrf_exempt
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]




# music_style_answers = [{ "key": 0, "label": '신나는' }, { "key": 0, "label": '그루브한' }, { "key": 0, "label": '슬픈' }],

    # surveySheet = {
    #     "category": ['뮤직 스타일', '장소/상황', '감정', '계절', '시간', '날씨'],
    #     "require": [
    #         {
    #             "category": '뮤직 스타일',
		# 						"cateogory_key": 1,
    #             "question": '당신이 선호하는 음악 스타일은 무엇인가요?',
    #             "options": music_style_answers,
    #             "require": True,
    #         },
    #         {
    #             "category": '장소/상황',
		# 						"cateogory_key": 2,
    #             "question": '당신은 지금 어느 상황/장소에 있나요?',
    #             "options": music_style_answers,
    #             "require": True,
    #         },
    #         {
    #             "category": '감정',
		# 						"cateogory_key": 3,
    #             "question": '당신은 지금 어떤 감정을 가지고 있나요?',
    #             "options": music_style_answers,
    #             "require": True,
    #         },
    #     ],
    #     "optional": [
    #         {
    #             "category": '계절',
		# 						"cateogory_key": 4,
    #             "question": '선호하는/지금 계절은 무엇인가요?',
    #             "options": music_style_answers,
    #             "require": False,
    #         },
    #         {
    #             "category": '시간',
		# 						"cateogory_key": 5,
    #             "question": '선호하는/지금 시간은 언제인가요?',
    #             "options": music_style_answers,
    #             "require": False,
    #         },
    #         {
    #             "category": '날씨',
		# 						"cateogory_key": 6,
    #             "question": '선호하는/지금 날씨는 무엇인가요?',
    #             "options": music_style_answers,
    #             "require": False,
    #         },
    #     ],
    # }