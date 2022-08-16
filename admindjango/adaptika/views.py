from django.http import HttpResponse
from django.template import loader
from .models import User


def index(request):
    template = loader.get_template('index.html')
    context = {
      'users': User.objects.all(),
    }

    return HttpResponse(template.render(context, request))
