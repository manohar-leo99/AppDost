# AppDost - Digital Innovation Agency Website

A modern, responsive Django website for AppDost, a digital innovation agency specializing in mobile app development, web development, UI/UX design, and custom software solutions.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Mobile-First**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized static files
- **SEO Ready**: Proper meta tags and structure
- **Accessibility**: WCAG compliant with keyboard navigation
- **Interactive Elements**: Smooth scrolling, animated counters, and hover effects

## 🛠️ Technology Stack

- **Backend**: Django 5.2.7
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6.4.0
- **Database**: SQLite (development), PostgreSQL (production)
- **Deployment**: Render, Heroku, Railway, or any Python hosting

## 📁 Project Structure

```
site/
├── Dost/                    # Django project
│   ├── __init__.py         # Package initialization
│   ├── settings.py         # Django settings
│   ├── urls.py             # URL configuration
│   ├── views.py            # View functions
│   ├── wsgi.py             # WSGI configuration
│   └── asgi.py             # ASGI configuration
├── static/                 # Static files
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
├── templates/              # HTML templates
├── manage.py               # Django management
├── wsgi.py                 # WSGI application
├── app.py                  # Simple WSGI app for Render
├── requirements.txt        # Python dependencies
├── render.yaml            # Render deployment config
└── .gitignore             # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- pip (Python package installer)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manohar-leo99/AppDost.git
   cd AppDost
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Collect static files**
   ```bash
   python manage.py collectstatic
   ```

6. **Start development server**
   ```bash
   python manage.py runserver
   ```

7. **Open your browser**
   Navigate to `http://127.0.0.1:8000`

## 🌐 Deployment

### Render Deployment (Recommended)

1. **Go to [render.com](https://render.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub repository**: `manohar-leo99/AppDost`
5. **Configure the service:**

#### Build & Deploy Settings:
- **Name**: `appdost-website` (or your preferred name)
- **Environment**: `Python 3`
- **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
- **Start Command**: `gunicorn wsgi:application`
- **Plan**: `Free` (or choose a paid plan)

#### Environment Variables:
- `DEBUG` = `False`
- `SECRET_KEY` = `your-secret-key-here` (generate a strong key)
- `ALLOWED_HOSTS` = `your-app-name.onrender.com` (will be provided by Render)

### Alternative Deployment Options

#### Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect Django and deploy

#### Heroku
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `heroku config:set DEBUG=False SECRET_KEY=your-key`
4. `git push heroku main`

## 🔧 Configuration

### Environment Variables

For production, set these environment variables:

```env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,your-app.platform.com
```

### Database Configuration

For production, the project is configured to use PostgreSQL via `dj-database-url`.

## 📱 Features Overview

### Homepage Sections

1. **Hero Section**: Eye-catching landing with call-to-action
2. **Stats Section**: Animated counters showing company achievements
3. **Services Section**: Four main service offerings
4. **Portfolio Section**: Showcase of recent projects
5. **About Section**: Company information and values
6. **Testimonials**: Client feedback and reviews
7. **Contact Section**: Contact form and company information

### Interactive Features

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Animated counters on scroll
- Hover effects and transitions
- Contact form with validation
- Scroll-to-top button

## 🎨 Customization

### Colors

Update CSS variables in `static/css/style.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
}
```

### Content

Edit the HTML template in `templates/index.html` to update:
- Company information
- Service descriptions
- Portfolio items
- Contact details

## 📊 Performance

- Optimized images with lazy loading
- Minified CSS and JavaScript
- Compressed static files with WhiteNoise
- CDN-ready for global distribution

## 🔒 Security

- CSRF protection enabled
- XSS protection headers
- Secure cookie settings
- HTTPS redirect in production
- Content Security Policy ready

## 📞 Support

For support and questions:
- Email: contact@appdost.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🙏 Acknowledgments

- Django framework
- Font Awesome for icons
- Unsplash for images
- Modern CSS techniques
- JavaScript ES6+ features

---

**AppDost** - Transforming Ideas Into Digital Reality 🚀
