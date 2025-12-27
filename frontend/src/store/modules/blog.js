import { defineStore } from "pinia";
import { blogService } from "@/services/blogService";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
  }),

  getters: {
    publishedPosts: (state) => state.posts.filter((p) => p.published),
    latestPosts: (state) => state.posts.slice(0, 3),
  },

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await blogService.getAll();
        this.posts = response.data;
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(id) {
      this.loading = true;
      try {
        const response = await blogService.getById(id);
        this.currentPost = response.data;
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createPost(post) {
      try {
        const response = await blogService.create(post);
        this.posts.unshift(response.data);
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async updatePost(id, post) {
      try {
        const response = await blogService.update(id, post);
        const index = this.posts.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.posts[index] = response.data;
        }
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async deletePost(id) {
      try {
        await blogService.delete(id);
        this.posts = this.posts.filter((p) => p.id !== id);
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },
  },
});
