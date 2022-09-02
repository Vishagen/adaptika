from rest_framework import serializers
from .models import ActionLog, Permission, Role, User


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('name', 'description')


class RoleSerializer(serializers.ModelSerializer):
    # permissions = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())
    class Meta:
        depth = 2
        model = Role
        fields = ('name', 'permissions')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'serverID', 'email', 'displayName', 'firstName', 'lastName', 'role', 'verified', 'admin')


# Pagination serializer
class ActionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionLog
        fields = ('action_log_id', 'server_id', 'username', 'date_time', 'action')
