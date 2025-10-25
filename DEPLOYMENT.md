# AppDost Deployment Guide

This guide will help you deploy your AppDost Django website to various platforms.

## 🚀 Deployment Options

### 1. Heroku (Recommended for Django)

**Steps:**
1. Install Heroku CLI from [heroku.com](https://devcenter.heroku.com/articles/heroku-cli)
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set DEBUG=False
   heroku config:set SECRET_KEY=your-secret-key-here
   heroku config:set ALLOWED_HOSTS=your-app-name.herokuapp.com
   ```
5. Deploy: `git push heroku main`

**Pros:** Easy Django deployment, automatic scaling
**Cons:** Free tier discontinued, paid plans required

### 2. Railway

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect Django and deploy
4. Set environment variables in Railway dashboard:
   - `DEBUG=False`
   - `SECRET_KEY=your-secret-key-here`
   - `ALLOWED_HOSTS=your-app.railway.app`

**Pros:** Simple setup, good free tier
**Cons:** Newer platform

### 3. Render

**Steps:**
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Choose "Web Service"
4. Set build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
5. Set start command: `gunicorn Dost.wsgi`
6. Set environment variables:
   - `DEBUG=False`
   - `SECRET_KEY=your-secret-key-here`
   - `ALLOWED_HOSTS=your-app.onrender.com`

**Pros:** Good free tier, easy setup
**Cons:** Limited free tier resources

### 4. PythonAnywhere

**Steps:**
1. Create account at [pythonanywhere.com](https://pythonanywhere.com)
2. Upload your code via Git or file upload
3. Create virtual environment and install requirements
4. Configure WSGI file
5. Set up static files mapping

**Pros:** Python-focused, good for learning
**Cons:** More manual setup required

### 5. DigitalOcean App Platform

**Steps:**
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Connect your GitHub repository
3. Choose Python as the source type
4. Set build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
5. Set run command: `gunicorn Dost.wsgi`
6. Configure environment variables

**Pros:** Scalable, good performance
**Cons:** Paid service

## 🔧 Environment Variables

Set these environment variables on your chosen platform:

```env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=your-domain.com,your-app.platform.com
```

## 📁 Static Files

The project is configured with WhiteNoise for static file serving. Static files will be automatically collected during deployment.

## 🗄️ Database

For production, consider using:
- **PostgreSQL** (recommended)
- **MySQL**
- **SQLite** (for simple deployments)

Update your `DATABASES` setting in `settings.py` for production:

```python
import dj_database_url

DATABASES = {
    'default': dj_database_url.config(
        default='sqlite:///db.sqlite3'
    )
}
```

## 🔒 Security

For production deployment:
1. Set `DEBUG=False`
2. Use a strong `SECRET_KEY`
3. Configure `ALLOWED_HOSTS` properly
4. Use HTTPS (most platforms provide this automatically)
5. Consider using environment variables for sensitive data

## 📊 Monitoring

Consider adding monitoring services:
- **Sentry** for error tracking
- **New Relic** for performance monitoring
- **Google Analytics** for website analytics

## 🚀 Quick Deploy Commands

### Heroku
```bash
heroku create your-app-name
heroku config:set DEBUG=False SECRET_KEY=your-key ALLOWED_HOSTS=your-app.herokuapp.com
git push heroku main
```

### Railway
```bash
# Connect via Railway dashboard
# Set environment variables in dashboard
```

### Render
```bash
# Connect via Render dashboard
# Configure build and start commands
```

## 🔍 Troubleshooting

### Common Issues:
1. **Static files not loading**: Ensure `collectstatic` is run during build
2. **Database errors**: Check database configuration
3. **Import errors**: Verify all dependencies are in `requirements.txt`
4. **Port issues**: Ensure the app binds to `0.0.0.0:$PORT`

### Debug Steps:
1. Check build logs for errors
2. Verify environment variables are set
3. Test locally with production settings
4. Check platform-specific documentation

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Review Django deployment checklist
3. Check build and runtime logs
4. Test locally with production settings

---

**Happy Deploying! 🚀**
