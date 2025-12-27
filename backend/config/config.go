package config

import (
    "os"
    "github.com/joho/godotenv"
)

type Config struct {
    ServerPort  string
    DatabaseURL string
    Environment string
}

func Load() *Config {
    godotenv.Load()
    
    return &Config{
        ServerPort:  getEnv("SERVER_PORT", ":8080"),
        DatabaseURL: getEnv("DATABASE_URL", "postgres://localhost/portfolio?sslmode=disable"),
        Environment: getEnv("ENVIRONMENT", "development"),
    }
}

func getEnv(key, fallback string) string {
    if value := os.Getenv(key); value != "" {
        return value
    }
    return fallback
}