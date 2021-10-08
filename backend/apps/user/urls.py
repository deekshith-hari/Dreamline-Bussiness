from django.urls import path
from .views import *

urlpatterns = [
    path('', UserList.as_view(), name='user_list'),
    path('signin/', UserSignIn.as_view(), name='user_sign_in'),
    path('signup/', UserSignUp.as_view(), name='user_sign_up'),
    path('check-login/', UserCheckLogin.as_view(), name='user_check_login'),
]
