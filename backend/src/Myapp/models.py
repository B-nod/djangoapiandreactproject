from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
 category_name = models.CharField(max_length=200, null=True, unique=True)
 def __str__(self):
     return self.category_name

class Product(models.Model):
    name = models.CharField(max_length=255, default='Default Product Name')  # Provide a default value here
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='products/')  # Ensure you have media settings configured
    new_price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    size = models.CharField(max_length=200, unique=True)

class Order(models.Model):
    PAYMENT = (
        ('Cash on Delivery', 'Cash on Delivery'),
        ('Esewa', 'Esewa')
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.IntegerField()
    payment_method = models.CharField(max_length=200, choices=PAYMENT)
    payment_status = models.BooleanField(default=False)
    contact_no = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
