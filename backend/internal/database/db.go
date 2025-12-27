package database

import (
    "database/sql"
    "fmt"
    
    _ "github.com/lib/pq"
)

func Connect(url string) (*sql.DB, error) {
    db, err := sql.Open("postgres", url)
    if err != nil {
        return nil, fmt.Errorf("failed to open database: %w", err)
    }
    
    if err := db.Ping(); err != nil {
        return nil, fmt.Errorf("failed to ping database: %w", err)
    }
    
    // Run migrations
    if err := runMigrations(db); err != nil {
        return nil, fmt.Errorf("failed to run migrations: %w", err)
    }
    
    return db, nil
}

func runMigrations(db *sql.DB) error {
    migrations := []string{
        `CREATE TABLE IF NOT EXISTS projects (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            technologies TEXT[],
            github_url VARCHAR(500),
            live_url VARCHAR(500),
            image_url VARCHAR(500),
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )`,
        `CREATE TABLE IF NOT EXISTS blog_posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            slug VARCHAR(255) UNIQUE NOT NULL,
            content TEXT NOT NULL,
            excerpt TEXT,
            tags TEXT[],
            published BOOLEAN DEFAULT false,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )`,
        `CREATE TABLE IF NOT EXISTS profile (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tagline VARCHAR(500),
            bio TEXT,
            skills TEXT[],
            email VARCHAR(255),
            github VARCHAR(255),
            linkedin VARCHAR(255),
            updated_at TIMESTAMP DEFAULT NOW()
        )`,
    }
    
    for _, migration := range migrations {
        if _, err := db.Exec(migration); err != nil {
            return err
        }
    }
    
    return nil
}