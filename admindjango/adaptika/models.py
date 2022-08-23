from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=100, unique=True, default='')
    description = models.CharField(max_length=100, default='')


class Role(models.Model):
    name = models.CharField(max_length=100)
    permissions = models.ManyToManyField(Permission, related_name='permissions')


class User(models.Model):
    username = models.CharField(max_length=100)
    serverID = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    # password = 
    displayName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    verified = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
