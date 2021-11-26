from django.urls import path
from .import views

app_name="accounts"

urlpatterns = [
    path("login/",views.users_login,name="login"),
    path("logout/",views.users_logout,name="logout"),
    path("signup/",views.users_signup,name="signup"),
    path("kakao/login/", views.kakao_login, name="kakao_login"),
    path("kakao/login/callback/", views.kakao_callback, name="kakao_callback"),
    path("kakao/logout/", views.kakaoGetLogout, name="kakaoGetLogout"),

]
