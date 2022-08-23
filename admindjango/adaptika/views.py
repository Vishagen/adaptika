from django.http import HttpResponse
from rest_framework import generics
from django.template import loader

from .serializers import UserSerializer, RoleSerializer
from .models import User, Role


def index(request):
    template = loader.get_template('index.html')
    context = {'users': User.objects.all()}

    return HttpResponse(template.render(context, request))


class UserDetails(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'
    lookup_url_kwarg = 'username'


class RoleDetails(generics.RetrieveUpdateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'
