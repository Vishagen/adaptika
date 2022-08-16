from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('adaptika/', include('adaptika.urls')),
    path('admin/', admin.site.urls),
]