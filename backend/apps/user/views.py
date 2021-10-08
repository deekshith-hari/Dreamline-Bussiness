from rest_framework import generics
from rest_framework.response import Response
from .models import UserAccount
from .serializers import UserSerializer, UserSignUpSerializer, UserSignInSerializer
from .mixins import CustomLoginRequiredMixin


class UserSignUp(generics.CreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSignUpSerializer


class UserSignIn(generics.CreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSignInSerializer


class UserCheckLogin(CustomLoginRequiredMixin, generics.RetrieveAPIView):

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer([request.login_user], many=True)
        return Response(serializer.data[0])


class UserList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = UserAccount.objects.all()[:20]
    serializer_class = UserSerializer
