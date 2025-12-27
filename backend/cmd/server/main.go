package main

import (
    "log"
    "net/http"
    "portfolio-backend/config"
    "portfolio-backend/internal/database"
    "portfolio-backend/internal/handlers"
    "portfolio-backend/internal/middleware"
    "portfolio-backend/internal/repository"
    
    "github.com/gorilla/mux"
)

func main() {
    cfg := config.Load()
    
    db, err := database.Connect(cfg.DatabaseURL)
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    if err := database.RunMigrations(db); err != nil {
        log.Fatal("Failed to run migrations:", err)
    }
    
    router := mux.NewRouter()
    
    // Middleware
    router.Use(middleware.CORS)
    router.Use(middleware.Logger)
    
    // Initialize repositories
    projectRepo := repository.NewProjectRepository(db)
    blogRepo := repository.NewBlogRepository(db)
    profileRepo := repository.NewProfileRepository(db)
    
    // Initialize handlers
    projectHandler := handlers.NewProjectHandler(projectRepo)
    blogHandler := handlers.NewBlogHandler(blogRepo)
    profileHandler := handlers.NewProfileHandler(profileRepo)
    
    // Routes
    api := router.PathPrefix("/api").Subrouter()
    
    // Project routes
    api.HandleFunc("/projects", projectHandler.GetAll).Methods("GET")
    api.HandleFunc("/projects/{id}", projectHandler.GetByID).Methods("GET")
    api.HandleFunc("/projects", projectHandler.Create).Methods("POST")
    api.HandleFunc("/projects/{id}", projectHandler.Update).Methods("PUT")
    api.HandleFunc("/projects/{id}", projectHandler.Delete).Methods("DELETE")
    
    // Blog routes
    api.HandleFunc("/blog", blogHandler.GetAll).Methods("GET")
    api.HandleFunc("/blog/{id}", blogHandler.GetByID).Methods("GET")
    api.HandleFunc("/blog", blogHandler.Create).Methods("POST")
    api.HandleFunc("/blog/{id}", blogHandler.Update).Methods("PUT")
    api.HandleFunc("/blog/{id}", blogHandler.Delete).Methods("DELETE")
    
    // Profile routes
    api.HandleFunc("/profile", profileHandler.Get).Methods("GET")
    api.HandleFunc("/profile", profileHandler.Update).Methods("PUT")
    
    log.Printf("Server starting on %s", cfg.ServerPort)
    log.Fatal(http.ListenAndServe(cfg.ServerPort, router))
}