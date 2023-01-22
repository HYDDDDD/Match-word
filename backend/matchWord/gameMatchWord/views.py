from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serialization import UserSerializer

#views send data or display in template(frontend)
class UserList (generics.ListCreateAPIView) :
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DetailUser (generics.RetrieveUpdateDestroyAPIView) :
    queryset = User.objects.all()
    serializer_class = UserSerializer