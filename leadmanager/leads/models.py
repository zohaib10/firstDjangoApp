from django.db import models

# Create your models here.

class Lead(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100, unique=True)
    messages = models.CharField(max_length=500,blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
