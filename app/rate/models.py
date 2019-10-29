from django.db import models

class University(models.Model):
    name = models.CharField(max_length=128)
    location = models.CharField(max_length=256)
    #TODO others
    
    def __str__(self):
        return self.name


class Department(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    #TODO others

    def __str__(self):
        return self.name

