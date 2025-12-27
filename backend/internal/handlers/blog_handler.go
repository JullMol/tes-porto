package handlers

import (
    "database/sql"
    "encoding/json"
    "net/http"
    "portfolio-backend/internal/models"
    "portfolio-backend/internal/repository"
    "strconv"
    "strings"
    
    "github.com/gorilla/mux"
)

type BlogHandler struct {
    repo *repository.BlogRepository
}

func NewBlogHandler(repo *repository.BlogRepository) *BlogHandler {
    return &BlogHandler{repo: repo}
}

func (h *BlogHandler) GetAll(w http.ResponseWriter, r *http.Request) {
    posts, err := h.repo.GetAll()
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    json.NewEncoder(w).Encode(posts)
}

func (h *BlogHandler) GetByID(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid ID", http.StatusBadRequest)
        return
    }
    
    post, err := h.repo.GetByID(id)
    if err != nil {
        if err == sql.ErrNoRows {
            http.Error(w, "Blog post not found", http.StatusNotFound)
        } else {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
        return
    }
    
    json.NewEncoder(w).Encode(post)
}

func (h *BlogHandler) Create(w http.ResponseWriter, r *http.Request) {
    var post models.BlogPost
    if err := json.NewDecoder(r.Body).Decode(&post); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
    
    // Generate slug from title
    post.Slug = generateSlug(post.Title)
    
    // Generate excerpt if not provided
    if post.Excerpt == "" && len(post.Content) > 150 {
        post.Excerpt = post.Content[:150] + "..."
    }
    
    if err := h.repo.Create(&post); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(post)
}

func (h *BlogHandler) Update(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid ID", http.StatusBadRequest)
        return
    }
    
    var post models.BlogPost
    if err := json.NewDecoder(r.Body).Decode(&post); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
    
    post.ID = id
    if err := h.repo.Update(id, &post); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    json.NewEncoder(w).Encode(post)
}

func (h *BlogHandler) Delete(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid ID", http.StatusBadRequest)
        return
    }
    
    if err := h.repo.Delete(id); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    w.WriteHeader(http.StatusNoContent)
}

func generateSlug(title string) string {
    slug := strings.ToLower(title)
    slug = strings.ReplaceAll(slug, " ", "-")
    return slug
}