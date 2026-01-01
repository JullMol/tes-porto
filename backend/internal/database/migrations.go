package database

import (
    "database/sql"
    "log"
)

func RunMigrations(db *sql.DB) error {
    projectsTable := `
    CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        technologies TEXT[],
        github_url VARCHAR(500),
        live_url VARCHAR(500),
        image_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`

    blogTable := `
    CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT,
        excerpt TEXT,
        tags TEXT[],
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`

    profileTable := `
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        bio TEXT,
        email VARCHAR(255),
        github_url VARCHAR(500),
        linkedin_url VARCHAR(500),
        skills TEXT[],
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`

    tables := []string{projectsTable, blogTable, profileTable}

    for _, table := range tables {
        _, err := db.Exec(table)
        if err != nil {
            return err
        }
    }

    log.Println("Migrations completed successfully")
    return nil
}