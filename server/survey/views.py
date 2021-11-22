from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from django.contrib.auth.models import User, Group
# from rest_framework import permissions, viewsets
# from survey.serializers import UserSerializer, GroupSerializer

# Create your views here.
@csrf_exempt
def get(request):
  music_style_answers = [{ "key": 0, "label": '신나는' }, { "key": 0, "label": '그루브한' }, { "key": 0, "label": '슬픈' }],

  if request.method == 'GET':
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
  if request.method == 'POST':
    # data = json.loads.str(request.body)
    data = (request.body)
    print('answer', data)
    # for n in data:
    #   print(n)
    context = {"result": "data sent"}
    return JsonResponse(context, status=200)#, safe=False)
  else:
    context = {"result": None}
    return JsonResponse(context, status=209)#, safe=False)


# @csrf_exempt
# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# @csrf_exempt
# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#     permission_classes = [permissions.IsAuthenticated]