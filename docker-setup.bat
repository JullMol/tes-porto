@echo off
REM Portfolio Docker Quick Start Script for Windows
REM This script builds and runs the portfolio application using Docker

echo.
echo ================================================
echo  Portfolio Application - Docker Setup
echo ================================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed or not in PATH
    echo Please install Docker from: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

echo [✓] Docker found
docker --version
echo.

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker Compose is not installed
    echo Please install Docker Desktop which includes Docker Compose
    pause
    exit /b 1
)

echo [✓] Docker Compose found
docker-compose --version
echo.

REM Main menu
:menu
echo.
echo Select an option:
echo 1. Start all services (build if needed)
echo 2. Stop all services
echo 3. View logs
echo 4. Restart services
echo 5. Clean up (remove containers and volumes)
echo 6. View running containers
echo 7. Access database shell
echo 8. Access backend shell
echo 9. Access frontend shell
echo 0. Exit
echo.

set /p choice="Enter your choice (0-9): "

if "%choice%"=="1" goto start_services
if "%choice%"=="2" goto stop_services
if "%choice%"=="3" goto view_logs
if "%choice%"=="4" goto restart_services
if "%choice%"=="5" goto cleanup
if "%choice%"=="6" goto view_containers
if "%choice%"=="7" goto db_shell
if "%choice%"=="8" goto backend_shell
if "%choice%"=="9" goto frontend_shell
if "%choice%"=="0" goto exit_script
goto invalid_choice

:start_services
echo.
echo [*] Building and starting services...
cd docker
docker-compose up -d
cd ..
echo.
echo [✓] Services started!
echo.
echo Access points:
echo   Frontend:  http://localhost:3000
echo   Backend:   http://localhost:8080
echo   Database:  localhost:5432
echo.
timeout /t 5
goto menu

:stop_services
echo.
echo [*] Stopping all services...
cd docker
docker-compose down
cd ..
echo [✓] Services stopped!
timeout /t 3
goto menu

:view_logs
echo.
echo [*] Displaying logs (Ctrl+C to exit)...
cd docker
docker-compose logs -f
cd ..
goto menu

:restart_services
echo.
echo [*] Restarting services...
cd docker
docker-compose restart
cd ..
echo [✓] Services restarted!
timeout /t 3
goto menu

:cleanup
echo.
echo [WARNING] This will remove all containers and volumes!
set /p confirm="Are you sure? (y/n): "
if /i not "%confirm%"=="y" goto menu
cd docker
docker-compose down -v
cd ..
echo [✓] Cleanup complete!
timeout /t 3
goto menu

:view_containers
echo.
echo [*] Running containers:
echo.
cd docker
docker-compose ps
cd ..
timeout /t 5
goto menu

:db_shell
echo.
echo [*] Accessing database shell...
docker exec -it portfolio_db psql -U portfolio -d portfolio
echo.
goto menu

:backend_shell
echo.
echo [*] Accessing backend shell...
docker exec -it portfolio_backend sh
echo.
goto menu

:frontend_shell
echo.
echo [*] Accessing frontend shell...
docker exec -it portfolio_frontend sh
echo.
goto menu

:invalid_choice
echo [ERROR] Invalid choice!
timeout /t 2
goto menu

:exit_script
echo.
echo Thank you for using Portfolio Docker Setup!
echo.
exit /b 0
