from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=100, unique=True, default='')
    description = models.CharField(max_length=100, default='')


class Role(models.Model):
    name = models.CharField(max_length=100)
    permissions = models.TextField(default='')


class User(models.Model):
    username = models.CharField(max_length=100)
    serverID = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    displayName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    verified = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)


class ActionLog(models.Model):
    action_log_id = models.IntegerField(default=0)
    server_id = models.IntegerField(default=0)
    username = models.CharField(max_length=100, default='')
    date_time = models.DateTimeField(auto_now=True)
    action = models.CharField(max_length=100, default='')
