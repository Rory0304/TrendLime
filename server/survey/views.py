from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def get(request):
  music_style_answers = [{0: "신나는"}, {1: "발라드한"}, {2: "그루브한"},]

  if request.method == 'GET':
    surveySheet = {
        "category": ['뮤직 스타일', '장소/상황', '감정', '계절', '시간', '날씨'],
        "require": [
            {
                "category": '뮤직 스타일',
                "question": '당신이 선호하는 음악 스타일은 무엇인가요?',
                "answers": [{ 0: '신나는' }, { 1: '발라드한' }, { 2: '그루브한' }],
                "require": True,
            },
            {
                "category": '장소/상황',
                "question": '당신은 지금 어느 상황/장소에 있나요?',
                "answers": [{ 0: '' }, { 1: '' }, { 2: '' }],
                "require": True,
            },
            {
                "category": '감정',
                "question": '당신은 지금 어떤 감정을 가지고 있나요?',
                "answers": [{ 0: '' }, { 1: '' }, { 2: '' }],
                "require": True,
            },
        ],
        "optional": [
            {
                "category": '계절',
                "question": '선호하는/지금 계절은 무엇인가요?',
                "answers": [{ 0: '' }, { 1: '' }, { 2: '' }],
                "require": False,
            },
            {
                "category": '시간',
                "question": '선호하는/지금 시간은 언제인가요?',
                "answers": [{ 0: '' }, { 1: '' }, { 2: '' }],
                "require": False,
            },
            {
                "category": '날씨',
                "question": '선호하는/지금 날씨는 무엇인가요?',
                "answers": [{ 0: '' }, { 1: '' }, { 2: '' }],
                "require": False,
            },
        ],
    }
  else:
    surveySheet = None
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


