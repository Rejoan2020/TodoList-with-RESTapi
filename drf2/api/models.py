from django.db import models

# Create your models here.

class Todo(models.Model):
    taskname = models.CharField(max_length=100)
    description = models.CharField(default = "empty",max_length=1000)
    completed = models.BooleanField(default=False,blank = True)

    def __str__(self):
        return self.taskname