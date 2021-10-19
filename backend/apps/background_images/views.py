from apps.background_images.serializers import BackgroundImageSerializer
from apps.background_images.models import BackgroundImage
from rest_framework import generics
from django.shortcuts import render


class BackgroundImageList(generics.ListAPIView):
    queryset = BackgroundImage.objects.all()
    serializer_class = BackgroundImageSerializer

class BackgroundImageAdd(generics.CreateAPIView):
    queryset = BackgroundImage.objects.all()
    serializer_class = BackgroundImageSerializer
