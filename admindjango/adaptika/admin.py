from django.contrib import admin

from .models import ActionLog, User, Permission, Role

admin.site.register(User)
admin.site.register(Permission)
admin.site.register(Role)
admin.site.register(ActionLog)
