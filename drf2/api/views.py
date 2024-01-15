from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import serializersTodo
from .models import Todo

# Create your views here.


@api_view(['GET'])
def testApiView(request):
    msg = {"Hello" : 1}
    return Response(msg)

@api_view(['GET'])
def todoslist(request):
    res = Todo.objects.all();
    print(res[0].pk)
    serializer = serializersTodo(res,many = True)
    return Response(serializer.data)

@api_view(['GET'])
def todo(request,pk):
    res = Todo.objects.get(id=pk);
    serializer = serializersTodo(res,many = False)
    return Response(serializer.data)
    
@api_view(['POST'])
def createtodo(request):
    serializer = serializersTodo(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else :
        print("not valid")
    return Response(serializer.data)

@api_view(['DELETE'])
def delete(request,pk):
    res = Todo.objects.get(id=pk)
    name = res.taskname
    res.delete()
    return Response(f"Successfully deleted the item {name}")

@api_view(['POST'])
def update(request,pk):
    res = Todo.objects.get(id=pk)
    serializer = serializersTodo(instance=res,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)