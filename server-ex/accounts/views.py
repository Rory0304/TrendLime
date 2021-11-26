from django.shortcuts import render, redirect, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate,login,logout
from .models import User
from django.views.decorators.csrf import csrf_exempt
from Config.setting import SOCIAL_OUTH_CONFIG
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Create your views here.

@csrf_exempt
def users_login(request):
  print(request.POST)
  username = request.POST['username']
  password = request.POST['password']
  user = authenticate(request, username=username, password=password)
  if user is not None:
    login(request, user)
    result={"result" : "로그인 성공"}
    # Redirect to a success page.
  else:
    # Return an 'invalid login' error message.
    result={"result" : "로그인 실패"}
  return JsonResponse(result, status=201)


@csrf_exempt
def users_logout(request):
  logout(request)
  # Redirect to a success page.
  result={"result" : "로그아웃"}
  return JsonResponse(result, status=201)


@csrf_exempt
def users_signup(request):
  print(request.POST)
  if request.method == "POST":
    print(request.POST)
    
    username = request.POST["username"]
    password = request.POST["password"]
    email = request.POST["email"]
    first_name = request.POST["first_name"]

    user = User.objects.create_user(username, email, password)
    if first_name:
      user.first_name = first_name
      user.save()
    result={"result" : "회원가입 성공"}

  return JsonResponse(result, status=201)

## 사용자 등록 
# >>> from django.contrib.auth.models import User
# >>> user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')

# # At this point, user is a User object that has already been saved
# # to the database. You can continue to change its attributes
# # if you want to change other fields.
# >>> user.last_name = 'Lennon'
# >>> user.save()

@api_view(['GET'])
@permission_classes([AllowAny])
def kakao_login(request):
  KAKAO_REST_API_KEY = SOCIAL_OUTH_CONFIG['KAKAO_REST_API_KEY']
  REDIRECT_URL = SOCIAL_OUTH_CONFIG['KAKAO_REDIRECT_URI']
  url = "kauth.kakao.com/oauth/authorize?client_id={0}&redirect_uri={1}&response_type=code".format(KAKAO_REST_API_KEY,REDIRECT_URL)
  print('url',url)
  res = redirect(url)
  print('res',res)
  return res


@api_view(['GET'])
@permission_classes([AllowAny, ])
def kakao_callback(request):
  print('getUserInfo_request',request)
  CODE = request.GET.get('code')
  url = "kauth.kakao.com/oauth/token"
  res = {
    'grant_type': 'authorization_code',
    'client_id': SOCIAL_OUTH_CONFIG['KAKAO_REST_API_KEY'],
    'redirect_url': SOCIAL_OUTH_CONFIG['KAKAO_REDIRECT_URI'],
    'client_secret': SOCIAL_OUTH_CONFIG['KAKAO_SECRET_KEY'],
    'code': CODE
  }
  headers = {
    "Content-Type: application/x-www-form-urlencoded"
  }
  response = requests.get(url, data=res, headers=headers)
  token_json = response.json()
  error = token_json.get("error", None)
  if error is not None:
    raise kakaoEception()
  access_token = token_json.get("access_token")
  user_url = "https://kapi.kakao.com/v2/user/me" # 유저 정보 조회하는 uri
  auth = f"Bearer {access_token}" 
  HEADER = {
      "Authorization": auth,
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
  }
  profile_res = requests.get(user_url, headers=HEADER)
  print('kakao_callback-profile_res', profile_res)
  #(6)
  email = profile_res.get("kakao_account",None)
  return Response(profile_res.text)


@api_view(['GET'])
@permission_classes([AllowAny])
def kakaoGetLogout(request):
  url = "kauth.kakao.com//v1/user/logout"
  # tokenJson =
  headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Bearer "+tokenJson['ACCESS_TOKEN']
  }
  res = requests.get(url, headers=headers)
  print('res',res)
  return res