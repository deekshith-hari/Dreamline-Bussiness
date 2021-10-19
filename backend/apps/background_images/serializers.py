from .models import BackgroundImage
from rest_framework import serializers


class BackgroundImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=True)
    name = serializers.CharField(required=True)

    class Meta:
        model = BackgroundImage
        fields = '__all__'
