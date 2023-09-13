from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
    routes = [
        {
            'Endpoint': '/machines/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of machines'
        }
    ]
    return JsonResponse(routes, safe=False)
