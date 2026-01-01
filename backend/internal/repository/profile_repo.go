package repository

import (
    "database/sql"
    "encoding/json"
    "portfolio-backend/internal/models"
    "time"
)

type ProfileRepository struct {
    db *sql.DB
}

func NewProfileRepository(db *sql.DB) *ProfileRepository {
    return &ProfileRepository{db: db}
}

func (r *ProfileRepository) Get() (*models.Profile, error) {
    query := `SELECT id, name, bio, email, github_url, linkedin_url, skills, created_at, updated_at FROM profile LIMIT 1`
    var p models.Profile
    var skillsJSON []byte
    err := r.db.QueryRow(query).Scan(&p.ID, &p.Name, &p.Bio, &p.Email, &p.GithubURL, &p.LinkedInURL, &skillsJSON, &p.CreatedAt, &p.UpdatedAt)
    if err != nil {
        return nil, err
    }
    json.Unmarshal(skillsJSON, &p.Skills)
    return &p, nil
}

func (r *ProfileRepository) Update(profile *models.Profile) error {
    skillsJSON, _ := json.Marshal(profile.Skills)
    query := `UPDATE profile SET name = $1, bio = $2, email = $3, github_url = $4, linkedin_url = $5, skills = $6, updated_at = $7 WHERE id = $8`
    profile.UpdatedAt = time.Now()
    _, err := r.db.Exec(query, profile.Name, profile.Bio, profile.Email, profile.GithubURL, profile.LinkedInURL, skillsJSON, profile.UpdatedAt, profile.ID)
    return err
}

func (r *ProfileRepository) Create(profile *models.Profile) error {
    skillsJSON, _ := json.Marshal(profile.Skills)
    query := `INSERT INTO profile (name, bio, email, github_url, linkedin_url, skills, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`
    now := time.Now()
    profile.CreatedAt = now
    profile.UpdatedAt = now
    return r.db.QueryRow(query, profile.Name, profile.Bio, profile.Email, profile.GithubURL, profile.LinkedInURL, skillsJSON, profile.CreatedAt, profile.UpdatedAt).Scan(&profile.ID)
}