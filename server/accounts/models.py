from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser): 
  #새로운 인자 추가가능
  #예시
  #jobs=models.CharField(max_length=10)
  pass
