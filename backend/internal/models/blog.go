package models

import "time"

type BlogPost struct {
    ID        int       `json:"id" db:"id"`
    Title     string    `json:"title" db:"title"`
    Slug      string    `json:"slug" db:"slug"`
    Content   string    `json:"content" db:"content"`
    Excerpt   string    `json:"excerpt" db:"excerpt"`
    Tags      []string  `json:"tags" db:"tags"`
    Published bool      `json:"published" db:"published"`
    CreatedAt time.Time `json:"created_at" db:"created_at"`
    UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
}