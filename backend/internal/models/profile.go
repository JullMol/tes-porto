package models

import "time"

type Profile struct {
    ID          int       `json:"id" db:"id"`
    Name        string    `json:"name" db:"name"`
    Bio         string    `json:"bio" db:"bio"`
    Email       string    `json:"email" db:"email"`
    GithubURL   string    `json:"github_url" db:"github_url"`
    LinkedInURL string    `json:"linkedin_url" db:"linkedin_url"`
    Skills      []string  `json:"skills" db:"skills"`
    CreatedAt   time.Time `json:"created_at" db:"created_at"`
    UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
}
