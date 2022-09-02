from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # Users/(username)
    path('users/<str:username>', views.UserDetails.as_view(), name='user-details'),
    path('roles/<str:name>', views.RoleDetails.as_view(), name='role-details'),
    path('rolelist', views.RoleList.as_view(), name='role-list'),
    path('permissionlist', views.PermissionList.as_view(), name='role-list'),
    path('actionloglist', views.ActionLogList.as_view(), name='action-log-list'),

]
