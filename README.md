# Portfolio Website - dev.io Style

Modern portfolio website built with **Vue 3**, **Tailwind CSS**, **Go** backend, dan **PostgreSQL** database. Dengan dark theme dan purple gradient accents yang elegan.

## 🌟 Features

- **Modern Design** - Dark theme dengan purple gradient accents
- **Responsive** - Mobile, tablet, dan desktop optimized
- **Fast** - Vue 3 + Vite + Tailwind CSS untuk performance
- **Full Stack** - Go backend API + PostgreSQL database
- **Docker Ready** - Containerized untuk easy deployment

## 📸 Design Inspiration

Design terinspirasi dari [dev.io](https://devio.dev) dengan:

- Glass effect cards
- Smooth animations
- Gradient text highlights
- Professional layout

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         Frontend (Vue 3 + Tailwind)    │
│         http://localhost:3000           │
└────────────────────┬────────────────────┘
                     │ /api
┌────────────────────▼────────────────────┐
│      Backend (Go + Echo Framework)      │
│      http://localhost:8080              │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│    Database (PostgreSQL)                │
│    localhost:5432                       │
└─────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (untuk development)
- Go 1.21+ (untuk backend development)

### Option 1: Using Docker (Recommended)

**Windows:**

```bash
cd docker
docker-compose up -d
```

Atau gunakan script:

```bash
docker-setup.bat
```

**Linux/Mac:**

```bash
cd docker
docker-compose up -d
```

Atau gunakan script:

```bash
chmod +x docker-setup.sh
./docker-setup.sh
```

### Option 2: Local Development

**Terminal 1 - Frontend:**

```bash
cd frontend
npm install
npm run dev
```

**Terminal 2 - Backend:**

```bash
cd backend
go run ./cmd/server
```

**Terminal 3 - Database:**

```bash
# Using Docker untuk database saja
docker run --name portfolio_db \
  -e POSTGRES_USER=portfolio \
  -e POSTGRES_PASSWORD=portfolio123 \
  -e POSTGRES_DB=portfolio \
  -p 5432:5432 \
  postgres:15-alpine
```

## 📍 Access Points

| Service     | URL                   | Port |
| ----------- | --------------------- | ---- |
| Frontend    | http://localhost:3000 | 3000 |
| Backend API | http://localhost:8080 | 8080 |
| Database    | localhost             | 5432 |

## 📁 Project Structure

```
website-porto/
├── backend/                 # Go API Server
│   ├── cmd/
│   │   └── server/         # Entry point
│   ├── config/             # Configuration
│   ├── internal/
│   │   ├── database/       # DB setup & migrations
│   │   ├── handlers/       # HTTP handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Data models
│   │   └── repository/     # Data access layer
│   ├── go.mod
│   └── go.sum
│
├── frontend/                # Vue 3 Application
│   ├── src/
│   │   ├── components/     # Vue components
│   │   │   ├── blog/
│   │   │   ├── projects/
│   │   │   ├── layout/
│   │   │   └── common/
│   │   ├── views/          # Page components
│   │   ├── router/         # Vue Router config
│   │   ├── store/          # Pinia store
│   │   ├── services/       # API services
│   │   ├── utils/          # Utilities
│   │   ├── assets/         # Images, styles
│   │   ├── App.vue
│   │   └── main.js
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── docker/                  # Docker configuration
│   ├── docker-compose.yml  # Services orchestration
│   ├── Dockerfile.backend  # Backend image
│   ├── Dockerfile.frontend # Frontend image
│   └── nginx.conf         # Nginx reverse proxy
│
├── docker-setup.bat        # Windows setup script
├── docker-setup.sh         # Linux/Mac setup script
├── .dockerignore          # Docker ignore file
├── .env.example           # Environment variables example
├── DOCKER_SETUP.md        # Docker documentation
├── DOCKER_COMMANDS.md     # Docker command reference
├── README.md              # This file
└── frontend/DESIGN_UPDATES.md # Design documentation
```

## 🎨 Tech Stack

### Frontend

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Axios** - HTTP client

### Backend

- **Go 1.21** - Backend language
- **Echo Framework** - Web framework
- **PostgreSQL** - Database
- **GORM** - ORM library (optional)

### DevOps

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy & static file serving

## 🔧 Configuration

### Environment Variables

Copy `.env.example` ke `.env` dan update values:

```bash
cp .env.example .env
```

Key variables:

```env
DATABASE_URL=postgres://portfolio:portfolio123@postgres:5432/portfolio
SERVER_PORT=:8080
ENVIRONMENT=production
VITE_API_URL=http://localhost:8080/api
```

### Docker Compose

Edit `docker/docker-compose.yml` untuk:

- Change ports
- Adjust resource limits
- Add environment variables
- Configure volumes

## 📚 Documentation

- **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** - Docker setup guide
- **[DOCKER_COMMANDS.md](./DOCKER_COMMANDS.md)** - Docker command reference
- **[frontend/DESIGN_UPDATES.md](./frontend/DESIGN_UPDATES.md)** - Design documentation
- **[frontend/README.md](./frontend/README.md)** - Frontend specific docs (if exists)
- **[backend/README.md](./backend/README.md)** - Backend specific docs (if exists)

## 🛠️ Development

### Frontend Development

```bash
cd frontend
npm install
npm run dev
npm run build
npm run preview
```

### Backend Development

```bash
cd backend
go mod download
go run ./cmd/server
go build -o portfolio ./cmd/server
```

### Database Management

```bash
# Connect to database
docker exec -it portfolio_db psql -U portfolio -d portfolio

# View tables
\dt

# Run migrations
# (depends on backend setup)
```

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
# Output: dist/ folder ready for deployment
```

### Backend Build

```bash
cd backend
CGO_ENABLED=0 GOOS=linux go build -o portfolio ./cmd/server
```

### Docker Build

```bash
cd docker
docker-compose build
docker-compose up -d
```

## 🚢 Deployment

### Using Docker Compose

```bash
cd docker
docker-compose -f docker-compose.yml up -d
```

### Using Docker Swarm (future)

```bash
docker swarm init
docker stack deploy -c docker-compose.yml portfolio
```

### Using Kubernetes (future)

```bash
kubectl apply -f k8s/
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Docker Issues

```bash
# View logs
docker-compose logs -f

# Rebuild containers
docker-compose down -v
docker-compose up --build

# Check services
docker-compose ps
```

### Database Connection Error

```bash
# Check if postgres is running
docker-compose ps postgres

# Check backend logs
docker logs portfolio_backend
```

## 📖 API Documentation

Backend API endpoints (detailed docs in backend/README.md):

```
GET  /api/profile      - Get profile info
GET  /api/projects     - List projects
GET  /api/projects/:id - Get project detail
POST /api/projects     - Create project
GET  /api/blog         - List blog posts
GET  /api/blog/:id     - Get blog post
POST /api/contact      - Submit contact form
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from [dev.io](https://devio.dev)
- Vue 3 community
- Tailwind CSS
- Go Echo Framework

## 📞 Contact

- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🗺️ Roadmap

- [ ] Add comment system for blog posts
- [ ] Implement dark/light theme toggle
- [ ] Add email notifications
- [ ] Create admin dashboard
- [ ] Add authentication system
- [ ] Implement analytics
- [ ] Add search functionality
- [ ] Create API documentation (Swagger)

---

**Last Updated**: December 27, 2025  
**Version**: 1.0.0  
**Status**: Active Development

Untuk bantuan lebih lanjut, buka issue atau lihat dokumentasi di folder `docs/`.
