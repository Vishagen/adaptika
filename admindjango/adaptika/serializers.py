from rest_framework import serializers
from .models import Permission, Role, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'serverID', 'email', 'displayName', 'firstName', 'lastName', 'role', 'verified', 'admin')


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('name', 'description')


class RoleSerializer(serializers.ModelSerializer):
    # permissions = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())
    permissions = PermissionSerializer(many=True, read_only=True)

    class Meta:
        depth = 2
        model = Role
        fields = ('name', 'permissions')
