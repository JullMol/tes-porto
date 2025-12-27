# Docker Command Reference

Quick reference untuk Docker commands yang sering digunakan.

## Navigation

```bash
# Go ke folder docker
cd docker

# Or from root directory
cd docker
```

## Starting Services

### Basic Start

```bash
# Build dan start semua services
docker-compose up -d

# Start dengan rebuild forced
docker-compose up -d --build

# Start tanpa detach mode (lihat logs)
docker-compose up
```

### Start Specific Service

```bash
# Start hanya frontend
docker-compose up -d frontend

# Start hanya backend
docker-compose up -d backend

# Start hanya database
docker-compose up -d postgres
```

## Stopping Services

### Stop Services

```bash
# Stop semua services (data preserved)
docker-compose down

# Stop dan remove volumes
docker-compose down -v

# Stop spesifik service
docker-compose stop frontend
docker-compose stop backend
```

## Logs

### View Logs

```bash
# View semua logs (follow mode)
docker-compose logs -f

# View specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f postgres

# View last 100 lines
docker-compose logs --tail=100

# View logs dari specific time
docker-compose logs --since 10m
```

## Container Management

### View Status

```bash
# Check running containers
docker-compose ps

# View detailed info
docker ps -a

# View container stats (CPU, memory)
docker stats

# Inspect specific container
docker inspect portfolio_frontend
```

### Access Shell

#### Database

```bash
# Access PostgreSQL shell
docker exec -it portfolio_db psql -U portfolio -d portfolio

# Common PostgreSQL commands
\dt                 # List tables
\d table_name       # Describe table
SELECT * FROM...;   # Run SQL query
\q                  # Exit
```

#### Backend

```bash
# Access backend shell
docker exec -it portfolio_backend sh

# Run commands
go version
cat config.json
```

#### Frontend

```bash
# Access frontend shell
docker exec -it portfolio_frontend sh

# Check nginx
nginx -v
ps aux | grep nginx
```

## Rebuild & Restart

### Rebuild

```bash
# Rebuild specific service
docker-compose up -d --build frontend
docker-compose up -d --build backend

# Rebuild all
docker-compose up -d --build

# Remove image dan rebuild
docker-compose down
docker system prune -a
docker-compose up -d --build
```

### Restart

```bash
# Restart semua services
docker-compose restart

# Restart specific service
docker-compose restart frontend
docker-compose restart backend

# Stop dan start (beda dari restart)
docker-compose stop
docker-compose start
```

## Cleanup

### Remove Containers

```bash
# Stop dan remove containers (preserve volumes)
docker-compose down

# Stop dan remove everything
docker-compose down -v

# Remove specific container
docker stop portfolio_frontend
docker rm portfolio_frontend
```

### Remove Images

```bash
# Remove unused images
docker image prune

# Remove all images
docker rmi $(docker images -q)

# Remove specific image
docker rmi portfolio_backend portfolio_frontend
```

### Full Cleanup

```bash
# Remove everything (containers, volumes, networks)
docker-compose down -v

# Remove all unused Docker resources
docker system prune -a

# Remove dangling volumes
docker volume prune
```

## Debugging

### Check Service Health

```bash
# View all containers with health status
docker ps --format "table {{.Names}}\t{{.Status}}"

# Check specific service
docker inspect --format='{{.State.Health.Status}}' portfolio_frontend
```

### View Network

```bash
# List networks
docker network ls

# Inspect portfolio network
docker network inspect portfolio_network

# Test connectivity between containers
docker exec portfolio_frontend ping backend
```

### Check Ports

```bash
# View port mappings
docker-compose ps

# List all listening ports
netstat -tulpn | grep LISTEN

# Kill process on port (Linux)
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## Performance

### Monitor Resources

```bash
# Real-time stats
docker stats

# Specific container
docker stats portfolio_frontend

# With formatting
docker stats --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
```

### Optimize Build

```bash
# Build dengan progress output
docker-compose build --progress=plain

# Build specific service
docker-compose build frontend
```

## Security

### View Environment Variables

```bash
# See env vars dalam container
docker exec portfolio_backend env | grep DATABASE

# Inspect secret handling
docker inspect portfolio_backend | grep -A 20 "Env"
```

### Update Credentials

```bash
# Edit docker-compose.yml untuk change DATABASE_PASSWORD
nano docker-compose.yml

# Rebuild dan restart
docker-compose down -v
docker-compose up -d --build
```

## Troubleshooting

### Service Won't Start

```bash
# Check logs
docker logs portfolio_backend

# Check if port is in use
netstat -tulpn | grep 8080

# Rebuild container
docker-compose up -d --build backend
```

### Memory/CPU Issues

```bash
# Check resource usage
docker stats

# Limit resources (edit docker-compose.yml)
# Add under service:
# deploy:
#   resources:
#     limits:
#       cpus: '0.5'
#       memory: 512M
```

### Database Connection Error

```bash
# Check postgres health
docker-compose ps postgres

# Test connection
docker exec portfolio_backend wget -O- http://localhost:8080/health

# Rebuild database
docker-compose down -v postgres
docker-compose up -d postgres
```

### Network Issues

```bash
# Check if containers can communicate
docker exec portfolio_frontend ping backend

# Inspect network
docker network inspect portfolio_network

# Check DNS resolution
docker exec portfolio_backend nslookup postgres
```

## Using Scripts

### Windows

```bash
# Make script executable
# (usually auto on Windows)

# Run script
docker-setup.bat

# From anywhere
cd portfolio
docker-setup.bat
```

### Linux/Mac

```bash
# Make script executable
chmod +x docker-setup.sh

# Run script
./docker-setup.sh

# From anywhere
cd portfolio
./docker-setup.sh
```

## Docker Compose Files

### Current Structure

```
docker/
├── docker-compose.yml      # Main compose file
├── Dockerfile.backend      # Backend image definition
├── Dockerfile.frontend     # Frontend image definition
└── nginx.conf             # Nginx configuration
```

### Override Configuration

```bash
# Use multiple compose files
docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d

# Specify custom file
docker-compose -f custom-compose.yml up -d
```

## Tips & Best Practices

1. **Always use `-d` flag** untuk run di background
2. **Check logs regularly** untuk catch errors early
3. **Use `docker-compose ps`** untuk verify status
4. **Clean up periodically** dengan `docker system prune`
5. **Keep images small** menggunakan multi-stage builds
6. **Use health checks** untuk monitor services
7. **Document credentials** di `.env.example` (jangan `.env`)
8. **Test port availability** sebelum start services

## Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker CLI Reference](https://docs.docker.com/reference/cli/docker/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)
