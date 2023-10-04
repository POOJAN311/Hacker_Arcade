from rest_framework import serializers
from .models import User, Machine, Blog
import hashlib

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'bio', 'first_name', 'last_name', 'profile_pic', 'policy_agreement', 'terms_conditions_agreement']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        hashed_password = hashlib.sha256(validated_data['password'].encode()).hexdigest()
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
        user.set_password(hashed_password)
        user.save()
        return user
    
class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = ['id', 'ami_id', 'blog', 'title', 'description', 'flag', 'image', 'difficulty', 'date_created']
        
    def create(self, validated_data):
        machine = Machine(
            ami_id=validated_data['ami_id'],
            blog=validated_data['blog'],
            title=validated_data['title'],
            description=validated_data['description'],
            flag=validated_data['flag'],
            image=validated_data['image'],
            difficulty=validated_data['difficulty']
        )
        machine.save()
        return machine

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'html_body', 'date_created', 'thumbnail']
        
    def create(self, validated_data):
        blog = Blog(
            title=validated_data['title'],
            html_body=validated_data['html_body'],
            thumbnail=validated_data['thumbnail']
        )
        blog.save()
        return blog