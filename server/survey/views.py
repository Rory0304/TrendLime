from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework import permissions, viewsets
from django.contrib.auth.models import User, Group
from survey.models import Question, User_history, Recommendation_result, Song
from survey.serializers import QuestionSerializer, User_historySerializer, Recommendation_resultSerializer, SongSerializer, UserSerializer, GroupSerializer

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
@csrf_exempt
def get(request):
  """
    필수질문 세 개와 비필수질문을 사용자에게 출제하는데
    카테고리에 맞는 선택지를 랜덤으로 골라서 사용자에게 보여줌
  """
  music_style_answers = [{ "key": 0, "label": '신나는' }, { "key": 0, "label": '그루브한' }, { "key": 0, "label": '슬픈' }],

  if request.method == 'GET':
    # require = []
    # for i in range(3):
    #   question_queryset = Question.objects.all().filter(category_id == i)
    # #  option_queryset = Option.objects.all().filter(category_id == i) #삭제됨
    #   require.append({
    #     "category": question_queryset.category,
    #     "cateogory_key": question_queryset.category_id,
    #     "question": question_queryset.question,
    #     "options": question_queryset.option,
    #     "require": True
    #   })
    # optional = []
    # for i in range(3,6,1):       # 아직 작성 다 안함
    #   question_queryset = Question.objects.get(category_id == i)
    #   option_queryset = Option.objects.get(category_id == i)
    #   optional.append({
    #     "category": question_queryset.category,
    #     "cateogory_key": question_queryset.category_id,
    #     "question": question_queryset.question,
    #     "options": option_queryset, # 아직 작성 다 안함
    #     "require": False
    #   })

    # surveySheet = {
    #   "require": require,
    #   "optional": optional
    # }

    surveySheet = {
        "category": ['뮤직 스타일', '장소/상황', '감정', '계절', '시간', '날씨'],
        "require": [
            {
                "category": '뮤직 스타일',
								"cateogory_key": 1,
                "question": '당신이 선호하는 음악 스타일은 무엇인가요?',
                "options": music_style_answers,
                "require": True,
            },
            {
                "category": '장소/상황',
								"cateogory_key": 2,
                "question": '당신은 지금 어느 상황/장소에 있나요?',
                "options": music_style_answers,
                "require": True,
            },
            {
                "category": '감정',
								"cateogory_key": 3,
                "question": '당신은 지금 어떤 감정을 가지고 있나요?',
                "options": music_style_answers,
                "require": True,
            },
        ],
        "optional": [
            {
                "category": '계절',
								"cateogory_key": 4,
                "question": '선호하는/지금 계절은 무엇인가요?',
                "options": music_style_answers,
                "require": False,
            },
            {
                "category": '시간',
								"cateogory_key": 5,
                "question": '선호하는/지금 시간은 언제인가요?',
                "options": music_style_answers,
                "require": False,
            },
            {
                "category": '날씨',
								"cateogory_key": 6,
                "question": '선호하는/지금 날씨는 무엇인가요?',
                "options": music_style_answers,
                "require": False,
            },
        ],
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
    data = (request.body)
    print('answer', data)
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


##  사용자를 로그인, 로그아웃

# def my_view(request):
#     username = request.POST['username']
#     password = request.POST['password']
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         login(request, user)
#         # Redirect to a success page.
#         ...
#     else:
#         # Return an 'invalid login' error message.
#         ...


# def logout_view(request):
#     logout(request)
#     # Redirect to a success page.


## 로그인 데코레이션
# @login_required


## 사용자 등록 
# >>> from django.contrib.auth.models import User
# >>> user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')

# # At this point, user is a User object that has already been saved
# # to the database. You can continue to change its attributes
# # if you want to change other fields.
# >>> user.last_name = 'Lennon'
# >>> user.save()