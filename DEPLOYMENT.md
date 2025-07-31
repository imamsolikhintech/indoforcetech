# Deployment Guide - Mengatasi 502 Bad Gateway

## Masalah yang Diperbaiki

Error 502 Bad Gateway saat menjalankan aplikasi di production menggunakan Docker dan nginx telah diperbaiki dengan beberapa optimasi:

## Perubahan yang Dilakukan

### 1. Nginx Configuration (`nginx.conf`)

**Perbaikan:**
- ✅ Menambahkan error logging untuk debugging
- ✅ Menambahkan health check endpoint `/health`
- ✅ Memperbaiki cache control untuk SPA routing
- ✅ Menambahkan support untuk font files (woff, woff2, ttf, eot)
- ✅ Memperbaiki Content Security Policy dengan `'unsafe-eval'`
- ✅ Menambahkan favicon handling
- ✅ Optimasi gzip compression

### 2. Dockerfile Improvements

**Perbaikan:**
- ✅ Menambahkan build verification dengan `ls -la /app/dist`
- ✅ Menggunakan `--frozen-lockfile` untuk konsistensi dependencies
- ✅ Menghapus default nginx config sebelum copy custom config
- ✅ Setting proper permissions untuk nginx user
- ✅ Menambahkan health check untuk container monitoring
- ✅ Struktur build yang lebih robust

### 3. Docker Ignore (`.dockerignore`)

**Optimasi:**
- ✅ Mengurangi ukuran build context
- ✅ Menghindari file yang tidak perlu
- ✅ Mempercepat build process

## Cara Testing

### 1. Build Docker Image

```bash
# Build image
docker build -t indoforcetech-app .

# Verify build berhasil
docker images | grep indoforcetech-app
```

### 2. Run Container

```bash
# Run container
docker run -d -p 8080:80 --name indoforcetech-container indoforcetech-app

# Check container status
docker ps

# Check logs jika ada masalah
docker logs indoforcetech-container
```

### 3. Test Application

```bash
# Test health check
curl http://localhost:8080/health

# Test main application
curl -I http://localhost:8080/

# Test static assets
curl -I http://localhost:8080/logo.png
```

### 4. Debug jika masih ada masalah

```bash
# Masuk ke container untuk debug
docker exec -it indoforcetech-container sh

# Check nginx error logs
docker exec indoforcetech-container cat /var/log/nginx/error.log

# Check file permissions
docker exec indoforcetech-container ls -la /usr/share/nginx/html
```

## Troubleshooting 502 Bad Gateway

### Kemungkinan Penyebab:

1. **File tidak ditemukan**
   - Pastikan `yarn build` menghasilkan folder `dist`
   - Verify dengan: `docker exec container ls -la /usr/share/nginx/html`

2. **Permission issues**
   - Dockerfile sudah mengatur permissions dengan `chown nginx:nginx`
   - Check dengan: `docker exec container ls -la /usr/share/nginx/html`

3. **Nginx config error**
   - Test config: `docker exec container nginx -t`
   - Check logs: `docker logs container`

4. **Missing index.html**
   - Pastikan Vite build menghasilkan `index.html`
   - Check: `docker exec container cat /usr/share/nginx/html/index.html`

### Quick Fix Commands:

```bash
# Restart container
docker restart indoforcetech-container

# Rebuild jika perlu
docker stop indoforcetech-container
docker rm indoforcetech-container
docker rmi indoforcetech-app
docker build -t indoforcetech-app .
docker run -d -p 8080:80 --name indoforcetech-container indoforcetech-app
```

## Production Deployment

### Menggunakan Docker Compose

Buat file `docker-compose.prod.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

Jalankan dengan:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Monitoring

- Health check endpoint: `http://your-domain/health`
- Nginx access logs: `/var/log/nginx/access.log`
- Nginx error logs: `/var/log/nginx/error.log`
- Container health: `docker ps` (status should show "healthy")

## Catatan Penting

1. **Logo Issue**: Sudah diperbaiki dengan menggunakan import statement di Navigation.tsx
2. **SPA Routing**: Nginx config sudah menghandle client-side routing dengan `try_files`
3. **Static Assets**: Cache headers sudah dioptimalkan untuk performa
4. **Security**: Security headers sudah ditambahkan untuk production
5. **Compression**: Gzip compression aktif untuk mempercepat loading

Dengan konfigurasi ini, error 502 Bad Gateway seharusnya sudah teratasi di production environment.