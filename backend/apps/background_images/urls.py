from django.urls import path
from . import views

urlpatterns = [
    path('', views.BackgroundImageList.as_view(), name='background_image_list'),
    path('add/', views.BackgroundImageAdd.as_view(), name='background_image_add')
]
