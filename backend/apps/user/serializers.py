from .models import UserAccount
from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from secrets import token_hex
import datetime


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserAccount
        fields = ('username', 'email', 'password',
                  'token', 'token_expires_at')


class UserSignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)
    token_expires_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ('username', 'email', 'password',
                  'token', 'token_expires_at')

    def create(self, validated_data):  # this will override the create method
        validated_data['password'] = make_password(
            validated_data['password'])  # password encryption

        validated_data['token'] = token_hex(30)  # create token
        validated_data['token_expires_at'] = datetime.datetime.now(
        ) + datetime.timedelta(days=7)

        return super().create(validated_data)


class UserSignInSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)
    token_expires_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ('username', 'email', 'password',
                  'token', 'token_expires_at')

    def create(self, validated_data):
        user = UserAccount.objects.filter(email=validated_data['email'])

        if len(user) > 0 and check_password(validated_data['password'], user[0].password):
            user[0].token = token_hex(30)
            user[0].token_expires_at = datetime.datetime.now() + \
                datetime.timedelta(days=7)
            user[0].save()

            return user[0]
        else:
            raise serializers.ValidationError(
                {'error': 'The password or email is incorrect.'})
