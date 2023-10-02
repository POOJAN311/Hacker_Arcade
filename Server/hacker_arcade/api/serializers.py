from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'bio', 'first_name', 'last_name', 'profile_pic', 'policy_agreement', 'terms_conditions_agreement']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            bio=validated_data['bio'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            profile_pic=validated_data['profile_pic'],
            policy_agreement=validated_data['policy_agreement'],
            terms_conditions_agreement=validated_data['terms_conditions_agreement']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user