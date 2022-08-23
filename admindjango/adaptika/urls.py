from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # Users/(username)
    path('users/<str:username>', views.UserDetails.as_view(), name='user-details'),
    path('roles/<str:name>', views.RoleDetails.as_view(), name='role-details'),
]
