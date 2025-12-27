import api from "./api";

export const blogService = {
  getAll: () => api.get("/blog"),
  getById: (id) => api.get(`/blog/${id}`),
  create: (post) => api.post("/blog", post),
  update: (id, post) => api.put(`/blog/${id}`, post),
  delete: (id) => api.delete(`/blog/${id}`),
};
