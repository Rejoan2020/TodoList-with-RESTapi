from . import views
from django.urls import path

urlpatterns = [
    path('',views.testApiView,name="API"),
    path('list/',views.todoslist,name="list"),
    path('get/<str:pk>/',views.todo,name="detailed-todo"),
    path('create/',views.createtodo,name="post"),
    path('delete/<str:pk>/',views.delete,name="delete"),
    path('update/<str:pk>/',views.update,name="update"),
]