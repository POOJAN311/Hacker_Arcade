from django.urls import path
from .views import *

urlpatterns = [
    
    # Authentication
    path('user/register/', register_user, name='register'),
    path('user/login/', user_login, name='login'),
    path('user/logout/', user_logout, name='logout'),
    path('user/', user_info, name='user_info'),
    path('user/update/', user_update, name='user_update'),
    path('user/forgot_password/', forgot_password, name='forgot_password'),
    path('user/reset_password/', reset_password, name='reset_password'),
    path('user/delete_account/', delete_account, name='delete_account'),
    
    # Machines
    path('machine/<int:id>/', machine, name='machine'),
    path('machines/', machines, name='machines'),
    
    # Blogs
    path('blog/<int:id>/', blog, name='blog'),
    path('blogs/', blogs, name='blogs'),
]