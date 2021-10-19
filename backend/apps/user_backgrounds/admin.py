from django.contrib import admin
from .models import UserBackground

# Register your models here.


@admin.register(UserBackground)
class UserBackgroundModel(admin.ModelAdmin):
    fields = [
        'username',
        'company_name',
        'company_logo',
        'role',
        'generated_background'
    ]
    list_filter = []
    list_display = fields
    search_fields = ['username', 'company_name']
