from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate,login,logout
from .models import User
from django.views.decorators.csrf import csrf_exempt
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

