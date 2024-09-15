from django.contrib import admin
from .models import *
# yaha * vane chai product,category ko satta ho yeslechai sabai ho vanne janauxa

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(Order)