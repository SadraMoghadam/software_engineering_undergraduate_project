from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    username = models.IntegerField(primary_key=True, unique=True)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.email
