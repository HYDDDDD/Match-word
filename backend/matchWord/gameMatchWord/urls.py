from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>', views.DetailUser.as_view()),
    path('', views.api_root)
]
