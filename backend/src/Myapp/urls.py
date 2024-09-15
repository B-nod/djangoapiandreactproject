from django.urls import path
from Myapp import views
from .views import login, signup
from . import views
from django.urls import path
from .views import ProductList
from .views import ProductDetailView


urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]


