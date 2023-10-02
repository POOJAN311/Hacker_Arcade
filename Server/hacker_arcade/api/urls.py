from django.urls import path
from .views import *

urlpatterns = [
    
    # Authentication
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('user/', user_info, name='user_info'),
    path('user/update/', user_update, name='user_update'),
    
    # Machines
    path('machine/<int:id>/', machine, name='machine'),
    path('machines/', machines, name='machines'),
    
    # Blogs
    path('blog/<int:id>/', blog, name='blog'),
    path('blogs/', blogs, name='blogs'),
]