package models

import "time"

type Project struct {
    ID           int       `json:"id" db:"id"`
    Title        string    `json:"title" db:"title"`
    Description  string    `json:"description" db:"description"`
    Technologies []string  `json:"technologies" db:"technologies"`
    GithubURL    string    `json:"github_url" db:"github_url"`
    LiveURL      string    `json:"live_url" db:"live_url"`
    ImageURL     string    `json:"image_url" db:"image_url"`
    CreatedAt    time.Time `json:"created_at" db:"created_at"`
    UpdatedAt    time.Time `json:"updated_at" db:"updated_at"`
}