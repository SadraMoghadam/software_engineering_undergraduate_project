from django.contrib.auth import get_user_model
User = get_user_model()

from rest_framework import serializers

from user.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        """
        Override create method: set_password before save
        """
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = [
            'username', 'first_name', 'last_name',
            'email', 'is_professor'
            ]
