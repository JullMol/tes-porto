package repository

import (
    "database/sql"
    "portfolio-backend/internal/models"
    
    "github.com/lib/pq"
)

type ProjectRepository struct {
    db *sql.DB
}

func NewProjectRepository(db *sql.DB) *ProjectRepository {
    return &ProjectRepository{db: db}
}

func (r *ProjectRepository) FindAll() ([]models.Project, error) {
    query := `SELECT id, title, description, technologies, github_url, 
              live_url, image_url, created_at, updated_at FROM projects 
              ORDER BY created_at DESC`
    
    rows, err := r.db.Query(query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()
    
    var projects []models.Project
    for rows.Next() {
        var p models.Project
        err := rows.Scan(&p.ID, &p.Title, &p.Description, 
            pq.Array(&p.Technologies), &p.GithubURL, &p.LiveURL, 
            &p.ImageURL, &p.CreatedAt, &p.UpdatedAt)
        if err != nil {
            return nil, err
        }
        projects = append(projects, p)
    }
    
    return projects, nil
}

func (r *ProjectRepository) FindByID(id int) (*models.Project, error) {
    query := `SELECT id, title, description, technologies, github_url, 
              live_url, image_url, created_at, updated_at FROM projects 
              WHERE id = $1`
    
    var p models.Project
    err := r.db.QueryRow(query, id).Scan(&p.ID, &p.Title, &p.Description,
        pq.Array(&p.Technologies), &p.GithubURL, &p.LiveURL, 
        &p.ImageURL, &p.CreatedAt, &p.UpdatedAt)
    
    if err != nil {
        return nil, err
    }
    
    return &p, nil
}

func (r *ProjectRepository) Create(project *models.Project) error {
    query := `INSERT INTO projects (title, description, technologies, 
              github_url, live_url, image_url) 
              VALUES ($1, $2, $3, $4, $5, $6) 
              RETURNING id, created_at, updated_at`
    
    return r.db.QueryRow(query, project.Title, project.Description,
        pq.Array(project.Technologies), project.GithubURL, 
        project.LiveURL, project.ImageURL).Scan(&project.ID, 
        &project.CreatedAt, &project.UpdatedAt)
}

func (r *ProjectRepository) Update(project *models.Project) error {
    query := `UPDATE projects SET title = $1, description = $2, 
              technologies = $3, github_url = $4, live_url = $5, 
              image_url = $6, updated_at = NOW() 
              WHERE id = $7 RETURNING updated_at`
    
    return r.db.QueryRow(query, project.Title, project.Description,
        pq.Array(project.Technologies), project.GithubURL, 
        project.LiveURL, project.ImageURL, project.ID).Scan(&project.UpdatedAt)
}

func (r *ProjectRepository) Delete(id int) error {
    query := `DELETE FROM projects WHERE id = $1`
    _, err := r.db.Exec(query, id)
    return err
}