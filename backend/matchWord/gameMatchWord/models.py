from django.db import models

#Create table User
class User(models.Model) :
    username = models.CharField(max_length=15)
    email = models.EmailField()
    password = models.CharField(max_length=30)

#return object -> str
    def __str__(self) -> str:
        return self.username
    
