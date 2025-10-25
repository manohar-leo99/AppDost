"""
Simple WSGI application for Render deployment
"""
import os
import sys
import django
from django.core.wsgi import get_wsgi_application

# Add the project directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Dost.settings')

# Initialize Django
django.setup()

# Get the WSGI application
application = get_wsgi_application()