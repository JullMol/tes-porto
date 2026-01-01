import { defineStore } from "pinia";
import { projectService } from "@/services/projectService";
import projectsData from "@/data/projects";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [...projectsData],
    loading: false,
    error: null,
  }),

  getters: {
    getBySlug: (state) => {
      return (slug) => state.projects.find(p => p.slug === slug);
    }
  },

  actions: {
    async fetchProjects() {
      this.loading = true;
      try {
        const response = await projectService.getAll();

        // 🔒 fallback safety
        if (response?.data?.length) {
          this.projects = response.data;
        }
      } catch (error) {
        console.warn("Using local project data fallback");
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
