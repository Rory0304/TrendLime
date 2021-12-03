"""Config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from search.views import UserViewSet, SongViewSet, TagViewSet, Song_without_yearViewSet, Top11ViewSet, Top11_like100ViewSet, search, categories_and_tags
from detail.views import detail


# Routers provide an easy way of automatically determining the URL conf.
upperrouter = routers.DefaultRouter()
# upperrouter.register()
# upperrouter.register()
router = routers.DefaultRouter()
# router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'songs', SongViewSet)
router.register(r'songs_without_year', Song_without_yearViewSet)
# router.register(r'tags', TagViewSet)
router.register(r'top11', Top11ViewSet)
router.register(r'top11_like100', Top11_like100ViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls')),
    path('api/search', search, name='search'),
    path('api/tags', categories_and_tags, name='categories_and_tags'),
    path('api/detail', detail, name='detail'),
]
