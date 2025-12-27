#!/bin/bash

# Portfolio Docker Quick Start Script for Linux/Mac
# This script builds and runs the portfolio application using Docker

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}================================================${NC}"
    echo -e "${BLUE}  Portfolio Application - Docker Setup${NC}"
    echo -e "${BLUE}================================================${NC}"
    echo
}

print_success() {
    echo -e "${GREEN}[✓] $1${NC}"
}

print_error() {
    echo -e "${RED}[✗] $1${NC}"
}

print_info() {
    echo -e "${YELLOW}[*] $1${NC}"
}

check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed"
        echo "Please install Docker from: https://docs.docker.com/get-docker/"
        exit 1
    fi
    print_success "Docker found: $(docker --version)"
}

check_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed"
        echo "Please install Docker Compose from: https://docs.docker.com/compose/install/"
        exit 1
    fi
    print_success "Docker Compose found: $(docker-compose --version)"
}

start_services() {
    echo
    print_info "Building and starting services..."
    cd docker
    docker-compose up -d
    cd ..
    print_success "Services started!"
    echo
    echo "Access points:"
    echo "  Frontend:  http://localhost:3000"
    echo "  Backend:   http://localhost:8080"
    echo "  Database:  localhost:5432"
    echo
}

stop_services() {
    echo
    print_info "Stopping all services..."
    cd docker
    docker-compose down
    cd ..
    print_success "Services stopped!"
    echo
}

view_logs() {
    echo
    print_info "Displaying logs (Ctrl+C to exit)..."
    cd docker
    docker-compose logs -f
    cd ..
}

restart_services() {
    echo
    print_info "Restarting services..."
    cd docker
    docker-compose restart
    cd ..
    print_success "Services restarted!"
    echo
}

cleanup() {
    echo
    echo -e "${YELLOW}[!] WARNING: This will remove all containers and volumes!${NC}"
    read -p "Are you sure? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd docker
        docker-compose down -v
        cd ..
        print_success "Cleanup complete!"
    fi
    echo
}

view_containers() {
    echo
    print_info "Running containers:"
    echo
    cd docker
    docker-compose ps
    cd ..
    echo
}

db_shell() {
    echo
    print_info "Accessing database shell..."
    echo
    docker exec -it portfolio_db psql -U portfolio -d portfolio
    echo
}

backend_shell() {
    echo
    print_info "Accessing backend shell..."
    echo
    docker exec -it portfolio_backend sh
    echo
}

frontend_shell() {
    echo
    print_info "Accessing frontend shell..."
    echo
    docker exec -it portfolio_frontend sh
    echo
}

show_menu() {
    echo
    echo "Select an option:"
    echo "1. Start all services (build if needed)"
    echo "2. Stop all services"
    echo "3. View logs"
    echo "4. Restart services"
    echo "5. Clean up (remove containers and volumes)"
    echo "6. View running containers"
    echo "7. Access database shell"
    echo "8. Access backend shell"
    echo "9. Access frontend shell"
    echo "0. Exit"
    echo
}

# Main script
main() {
    print_header
    
    # Check prerequisites
    check_docker
    check_docker_compose
    echo
    
    # Menu loop
    while true; do
        show_menu
        read -p "Enter your choice (0-9): " choice
        
        case $choice in
            1) start_services ;;
            2) stop_services ;;
            3) view_logs ;;
            4) restart_services ;;
            5) cleanup ;;
            6) view_containers ;;
            7) db_shell ;;
            8) backend_shell ;;
            9) frontend_shell ;;
            0) 
                echo
                echo "Thank you for using Portfolio Docker Setup!"
                echo
                exit 0
                ;;
            *)
                print_error "Invalid choice!"
                sleep 1
                ;;
        esac
    done
}

# Run main function
main
