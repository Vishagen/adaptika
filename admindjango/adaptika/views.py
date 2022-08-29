from django.http import HttpResponse
from rest_framework import generics
from django.template import loader

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import Permission, User, Role


def index(request):
    template = loader.get_template('index.html')
    context = {'users': User.objects.all()}

    return HttpResponse(template.render(context, request))


class UserDetails(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'
    lookup_url_kwarg = 'username'


class RoleList(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    

class PermissionList(generics.ListCreateAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


class RoleDetails(generics.RetrieveUpdateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'
