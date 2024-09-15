from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()  # Order by creation timestamp
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



@csrf_exempt
def signup(request):
    # note: frontend bata request ma JSON format ma data backend ma pathako xa 
    if request.method =='POST':
        try:
            data = JSONParser().parse(request)
            # frontend bata ako json format ko data lai python dictionary ma convert gareko 
            user = User.objects.create_user(username=data['username'], password=data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return JsonResponse({'token': str(token)}, status=200)
        except IntegrityError:
            return JsonResponse({'error': 'Username is already taken by another'}, status=400)
        
@csrf_exempt

def login(request):
    if request.method =="POST":
        data = JSONParser().parse(request)
        # This parses the incoming JSON data from the request body and converts it into a Python dictionary (data).
        user = authenticate(request, username = data['username'], password = data['password'])
        # yesle chai request ma ako username ra password lai django database ma vako username ra password sgnaa check hanxa if correct xa vane matra it returns user haina vane it returns none
        if user is None:
            return JsonResponse({'error':'username and password didnot match'}, status=400)
        # edi user authenticated ho vane talako code will run
        else:
            try:
              token= Token.objects.get(user=user)
            #   authenticated user ko token xa vane Django’s Token model or simply database bata linxa if token xa vane json format ma dekhauxa if xaina vane except block ma janxa
            except:
                token=  Token.objects.create(user=user)
                # else authenticated user ko token create garxa ra last ma json form ma display garxa tala ko line le
            return JsonResponse({
                'token': str(token),         # Token as string
                'username': user.username,   # Username from authenticated user
                'password': data['password'] # Return the same password (be careful with sensitive data)
            }, status=200)









