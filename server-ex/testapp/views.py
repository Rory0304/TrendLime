from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def TestappGet(request):
  testdata = request.GET.get('q')

  if testdata == None:
    context = {'result' : None}
  else :
    context = {'result' : testdata}
  return JsonResponse(context, status = 201)