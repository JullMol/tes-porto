# Docker Setup - Portfolio Application

## Overview

Aplikasi portfolio dapat dijalankan dalam Docker container dengan 3 services utama:

- **PostgreSQL** Database (port 5432)
- **Go Backend** API (port 8080)
- **Vue Frontend** (port 3000)

## Prerequisites

- Docker (v20.10+)
- Docker Compose (v2.0+)
- Minimal 2GB RAM available untuk containers

## Quick Start

### 1. Build dan Run Containers

```bash
# Navigate ke root directory
cd website-porto

# Build images dan start containers
docker-compose up -d

# Check status
docker-compose ps
```

Output yang diharapkan:

```
NAME                  STATUS              PORTS
portfolio_db          Up (healthy)        0.0.0.0:5432->5432/tcp
portfolio_backend     Up (healthy)        0.0.0.0:8080->8080/tcp
portfolio_frontend    Up                  0.0.0.0:3000->80/tcp
```

### 2. Access Application

```
Frontend:  http://localhost:3000
Backend:   http://localhost:8080
Database:  localhost:5432
```

### 3. Stop Containers

```bash
# Stop all containers
docker-compose down

# Stop dan remove volumes
docker-compose down -v
```

## Services Details

### PostgreSQL (Database)

- **Image**: `postgres:15-alpine`
- **Container**: `portfolio_db`
- **Port**: 5432
- **Credentials**:
  - User: `portfolio`
  - Password: `portfolio123`
  - Database: `portfolio`
- **Data**: Persisted di `postgres_data` volume

```bash
# Connect ke database
docker exec -it portfolio_db psql -U portfolio -d portfolio

# View tables
\dt

# Exit
\q
```

### Backend (Go API)

- **Image**: Built dari `Dockerfile.backend`
- **Container**: `portfolio_backend`
- **Port**: 8080
- **Health Check**: `GET /health` endpoint

**Environment Variables**:

```
DATABASE_URL: postgres://portfolio:portfolio123@postgres:5432/portfolio?sslmode=disable
SERVER_PORT: :8080
ENVIRONMENT: production
CORS_ORIGIN: http://localhost:3000,http://localhost
```

```bash
# View logs
docker logs -f portfolio_backend

# Execute command dalam container
docker exec -it portfolio_backend sh
```

### Frontend (Vue + Nginx)

- **Image**: Built dari `Dockerfile.frontend`
- **Container**: `portfolio_frontend`
- **Port**: 3000 (mapped ke 80 dalam container)
- **Server**: Nginx (serving static files)

**Build Process**:

1. Build Vue aplikasi dengan Tailwind CSS
2. Copy dist folder ke Nginx

```bash
# View logs
docker logs -f portfolio_frontend

# Access shell
docker exec -it portfolio_frontend sh
```

## Build Optimization

### Frontend Dockerfile (Multi-stage)

```dockerfile
# Stage 1: Builder
FROM node:18-alpine
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Benefits**:

- Final image hanya ~50MB (tidak include Node/build tools)
- Faster deployment
- Secure (no source code dalam production image)

### Backend Dockerfile (Multi-stage)

```dockerfile
# Stage 1: Builder
FROM golang:1.21-alpine
WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download
COPY backend/ .
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/server

# Stage 2: Production
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
```

**Benefits**:

- Minimal image size (~20MB)
- No dependencies di production
- Fast startup time

## Network Configuration

Services berkomunikasi melalui `portfolio_network`:

```
Frontend (localhost:3000)
    ↓
Nginx (localhost:80)
    ↓
API Proxy (/api → http://backend:8080)
    ↓
Backend (portfolio_backend:8080)
    ↓
Database (postgres:5432)
```

### Nginx Reverse Proxy

```nginx
location /api {
    proxy_pass http://backend:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## Useful Docker Commands

### View Logs

```bash
# Frontend logs
docker logs portfolio_frontend

# Backend logs
docker logs portfolio_backend

# Database logs
docker logs portfolio_db

# All services
docker-compose logs -f
```

### Enter Container Shell

```bash
# Frontend
docker exec -it portfolio_frontend sh

# Backend
docker exec -it portfolio_backend sh

# Database
docker exec -it portfolio_db psql -U portfolio -d portfolio
```

### Rebuild Containers

```bash
# Rebuild specific service
docker-compose up -d --build frontend
docker-compose up -d --build backend

# Rebuild all
docker-compose up -d --build
```

### View Container Stats

```bash
# Real-time stats
docker stats

# Specific container
docker stats portfolio_frontend
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :3000
lsof -i :8080
lsof -i :5432

# Kill process (Linux/Mac)
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Container Failed to Start

```bash
# Check logs
docker logs portfolio_backend

# Rebuild and restart
docker-compose down
docker-compose up --build -d
```

### Database Connection Error

```bash
# Check if postgres is healthy
docker-compose ps

# Manually test connection
docker exec portfolio_backend wget -O- http://localhost:8080/health
```

### Frontend Not Updating

```bash
# Clear cache and rebuild
docker-compose down
docker system prune -a
docker-compose up --build -d
```

## Production Deployment

### Environment Setup

```bash
# Create .env file
cp .env.example .env

# Update values
DATABASE_URL=postgres://user:pass@host:5432/db
ENVIRONMENT=production
```

### Performance Tips

1. **Use health checks** untuk automatic restart
2. **Set resource limits** untuk containers
3. **Use logging drivers** untuk centralized logging
4. **Enable restart policies** (unless-stopped)
5. **Use `.dockerignore`** untuk faster builds

### Example Production docker-compose.yml

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    restart: always
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
        reservations:
          cpus: "0.25"
          memory: 256M
```

## Development Mode

### Hot Reload Frontend

```bash
# Run frontend locally (tidak di Docker)
cd frontend
npm install
npm run dev

# Backend + Database di Docker
docker-compose up -d postgres backend
```

### Debug Mode

```bash
# Dengan verbose logging
docker-compose up --verbose

# Keep container running untuk inspection
docker-compose exec -it frontend sh
```

## File Structure

```
website-porto/
├── docker/
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   ├── docker-compose.yml
│   └── nginx.conf
├── backend/
│   ├── cmd/
│   │   └── server/
│   │       └── main.go
│   ├── go.mod
│   └── go.sum
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── .dockerignore
```

## References

- [Docker Official Documentation](https://docs.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Last Updated**: December 27, 2025
**Docker Version**: 3.8 (Compose format)
**Services**: PostgreSQL 15, Go 1.21, Node 18, Nginx Alpine
