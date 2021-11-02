from django.urls import path
from . import views

urlpatterns =[
    path('add/', views.UserBackgroundAdd.as_view(), name='create_user_background'),
    path('', views.UserBackgroundList.as_view(), name='create_user_background'),
    path('images/<int:pk>/', views.UserBackgroundImage.as_view(), name='create_user_background'),

]