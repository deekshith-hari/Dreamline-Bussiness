from .models import UserBackground
from rest_framework import serializers

class UserBackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBackground
        fields = '__all__'

    def validate(self, data):
        errors = {}

        if 'username' not in data:
            errors['username'] = ['username is required.']

        if 'company_logo' not in data:
            errors['company_logo'] = ['company_logo is required.']

        if 'company_name' not in data:
            errors['company_name'] = ['company_name is required.']

        if 'role' not in data:
            errors['role'] = ['role is required.']

        if 'background_id' not in data:
            errors['background_id'] = ['background is required.']
        
        if bool(errors):
            raise serializers.ValidationError(errors)

        return data