package repository

import (
    "database/sql"
    "encoding/json"
    "portfolio-backend/internal/models"
    "time"
)

type BlogRepository struct {
    db *sql.DB
}

func NewBlogRepository(db *sql.DB) *BlogRepository {
    return &BlogRepository{db: db}
}

func (r *BlogRepository) GetAll() ([]models.BlogPost, error) {
    query := `SELECT id, title, slug, content, excerpt, tags, published, created_at, updated_at FROM blog_posts ORDER BY created_at DESC`
    rows, err := r.db.Query(query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var posts []models.BlogPost
    for rows.Next() {
        var p models.BlogPost
        var tagsJSON []byte
        err := rows.Scan(&p.ID, &p.Title, &p.Slug, &p.Content, &p.Excerpt, &tagsJSON, &p.Published, &p.CreatedAt, &p.UpdatedAt)
        if err != nil {
            return nil, err
        }
        json.Unmarshal(tagsJSON, &p.Tags)
        posts = append(posts, p)
    }
    return posts, nil
}

func (r *BlogRepository) GetByID(id int) (*models.BlogPost, error) {
    query := `SELECT id, title, slug, content, excerpt, tags, published, created_at, updated_at FROM blog_posts WHERE id = $1`
    var p models.BlogPost
    var tagsJSON []byte
    err := r.db.QueryRow(query, id).Scan(&p.ID, &p.Title, &p.Slug, &p.Content, &p.Excerpt, &tagsJSON, &p.Published, &p.CreatedAt, &p.UpdatedAt)
    if err != nil {
        return nil, err
    }
    json.Unmarshal(tagsJSON, &p.Tags)
    return &p, nil
}

func (r *BlogRepository) Create(post *models.BlogPost) error {
    tagsJSON, _ := json.Marshal(post.Tags)
    query := `INSERT INTO blog_posts (title, slug, content, excerpt, tags, published, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`
    now := time.Now()
    post.CreatedAt = now
    post.UpdatedAt = now
    return r.db.QueryRow(query, post.Title, post.Slug, post.Content, post.Excerpt, tagsJSON, post.Published, post.CreatedAt, post.UpdatedAt).Scan(&post.ID)
}

func (r *BlogRepository) Update(id int, post *models.BlogPost) error {
    tagsJSON, _ := json.Marshal(post.Tags)
    query := `UPDATE blog_posts SET title = $1, slug = $2, content = $3, excerpt = $4, tags = $5, published = $6, updated_at = $7 WHERE id = $8`
    post.UpdatedAt = time.Now()
    _, err := r.db.Exec(query, post.Title, post.Slug, post.Content, post.Excerpt, tagsJSON, post.Published, post.UpdatedAt, id)
    return err
}

func (r *BlogRepository) Delete(id int) error {
    query := `DELETE FROM blog_posts WHERE id = $1`
    _, err := r.db.Exec(query, id)
    return err
}
