# 🐳 Docker Quick Guide

## Persiapan

### Windows

1. Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
2. Ensure WSL 2 is installed
3. Restart komputer setelah install

### Linux

```bash
# Ubuntu/Debian
sudo apt-get install docker.io docker-compose

# Fedora
sudo dnf install docker docker-compose

# Start service
sudo systemctl start docker
```

### Mac

Install [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)

## Cara Menjalankan

### Metode 1: Menggunakan Script (Recommended)

**Windows:**

```bash
# Double-click file ini
docker-setup.bat
```

**Linux/Mac:**

```bash
cd website-porto
chmod +x docker-setup.sh
./docker-setup.sh
```

### Metode 2: Manual Command

```bash
cd website-porto/docker
docker-compose up -d
```

## Apa Yang Terjadi?

1. **PostgreSQL Database** - Port 5432

   - Username: portfolio
   - Password: portfolio123
   - Database: portfolio

2. **Go Backend API** - Port 8080

   - API endpoints di http://localhost:8080
   - Connected ke PostgreSQL

3. **Vue Frontend** - Port 3000
   - Portfolio website
   - Nginx serving static files

## Akses Website

Setelah service berjalan:

```
Frontend:  http://localhost:3000
API:       http://localhost:8080
Database:  localhost:5432
```

## Command Penting

```bash
# Navigate ke folder docker
cd website-porto/docker

# Lihat status service
docker-compose ps

# Lihat logs
docker-compose logs -f

# Stop service
docker-compose down

# Stop dan hapus data
docker-compose down -v

# Restart service
docker-compose restart

# Rebuild images
docker-compose up -d --build
```

## Database Access

```bash
# Connect ke PostgreSQL
docker exec -it portfolio_db psql -U portfolio -d portfolio

# Command di PostgreSQL
\dt              # List tables
SELECT * FROM...; # Run SQL
\q               # Exit
```

## Troubleshooting

### Port Already in Use

**Windows:**

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Linux/Mac:**

```bash
lsof -i :3000
kill -9 <PID>
```

### Service Tidak Bisa Start

```bash
# Lihat logs
docker-compose logs -f

# Clean up dan restart
docker-compose down -v
docker-compose up -d --build
```

### Database Connection Error

```bash
# Check postgres
docker-compose ps postgres

# Restart postgres
docker-compose restart postgres
```

## Files Penting

| File                  | Fungsi                |
| --------------------- | --------------------- |
| `docker-compose.yml`  | Service orchestration |
| `Dockerfile.frontend` | Frontend image        |
| `Dockerfile.backend`  | Backend image         |
| `nginx.conf`          | Nginx config          |

## Tips

✅ Selalu gunakan `-d` untuk run di background
✅ Check status dengan `docker-compose ps`
✅ Lihat logs untuk debug errors
✅ Clean up dengan `docker system prune`
✅ Backup database volume sebelum delete

## Informasi Lebih Lanjut

- **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** - Setup lengkap
- **[DOCKER_COMMANDS.md](./DOCKER_COMMANDS.md)** - Command reference
- **[README.md](../README.md)** - Project overview

---

**Siap untuk deploy!** 🚀
