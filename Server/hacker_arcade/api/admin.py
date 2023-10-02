from django.contrib import admin
from .models import *

# Register your models here.
class userAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    
admin.site.register(User, userAdmin)

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    
admin.site.register(Blog, BlogAdmin)

class MachineAdmin(admin.ModelAdmin):
    list_display = ('title', 'flag', 'difficulty')
    
admin.site.register(Machine, MachineAdmin)

class UserMachineAdmin(admin.ModelAdmin):
    list_display = ('user', 'machine', 'machine_status', 'is_cracked')
    
admin.site.register(UserMachine, UserMachineAdmin)