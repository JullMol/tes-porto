import { defineStore } from "pinia";
import { projectService } from "@/services/projectService";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProjects() {
      this.loading = true;
      try {
        const response = await projectService.getAll();
        this.projects = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async createProject(project) {
      try {
        const response = await projectService.create(project);
        this.projects.push(response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  },
});