import { defineStore } from "pinia";
import { profileService } from "@/services/profileService";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: null,
    loading: false,
    error: null,
  }),

  getters: {
    isLoaded: (state) => state.profile !== null,
  },

  actions: {
    async fetchProfile() {
      this.loading = true;
      this.error = null;
      try {
        const response = await profileService.get();
        this.profile = response.data;
      } catch (error) {
        this.error = error.message;
        // Set default profile if API fails
        this.profile = {
          name: "Your Name",
          tagline: "Python Developer | Full Stack Engineer",
          bio: "Building amazing web applications with modern technologies",
          github: "https://github.com/yourusername",
          linkedin: "https://linkedin.com/in/yourusername",
          email: "your.email@example.com",
        };
      } finally {
        this.loading = false;
      }
    },

    async updateProfile(profileData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await profileService.update(profileData);
        this.profile = response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
