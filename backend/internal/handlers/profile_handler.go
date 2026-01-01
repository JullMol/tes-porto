package handlers

import (
    "database/sql"
    "encoding/json"
    "net/http"
    "portfolio-backend/internal/models"
    "portfolio-backend/internal/repository"
)

type ProfileHandler struct {
    repo *repository.ProfileRepository
}

func NewProfileHandler(repo *repository.ProfileRepository) *ProfileHandler {
    return &ProfileHandler{repo: repo}
}

func (h *ProfileHandler) Get(w http.ResponseWriter, r *http.Request) {
    profile, err := h.repo.Get()
    if err != nil {
        if err == sql.ErrNoRows {
            http.Error(w, "Profile not found", http.StatusNotFound)
        } else {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(profile)
}

func (h *ProfileHandler) Update(w http.ResponseWriter, r *http.Request) {
    var profile models.Profile
    if err := json.NewDecoder(r.Body).Decode(&profile); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    if err := h.repo.Update(&profile); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(profile)
}