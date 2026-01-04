from django.contrib import admin
from .models import CarMake, CarModel


# Register your models here.
class CarModelInline(admin.StackedInline):
    model = CarModel
    extra = 1


# CarModelAdmin class
class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'car_make', 'car_type', 'year', 'dealer_id')
    list_filter = ('car_type', 'year')
    search_fields = ('name',)


# CarMakeAdmin class with CarModelInline
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'founded_year')
    search_fields = ('name',)
    inlines = [CarModelInline]


# Register models here
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)