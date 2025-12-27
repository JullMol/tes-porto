import api from "./api";

export const profileService = {
  get: () => api.get("/profile"),
  update: (profile) => api.put("/profile", profile),
};
