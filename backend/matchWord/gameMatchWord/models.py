from django.db import models

class User(models.Model) :
    username = models.CharField(max_length=15)
    email = models.EmailField()
    password = models.CharField(max_length=30)

