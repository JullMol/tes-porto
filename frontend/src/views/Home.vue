<template>
  <div class="bg-slate-950">
    <!-- Hero Section -->
    <Hero />

    <!-- Featured Projects Section -->
    <section class="py-20 bg-slate-950 border-t border-slate-800">
      <div class="container-custom">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="section-title mb-3">Selected Work</h2>
            <p class="section-subtitle">Projects that define my journey.</p>
          </div>
          <router-link
            to="/projects"
            class="text-purple-400 hover:text-purple-300 transition-smooth text-sm font-semibold flex items-center gap-2"
          >
            View All Projects <span>→</span>
          </router-link>
        </div>

        <div v-if="projectStore.loading" class="text-center py-20">
          <p class="text-slate-400">Loading projects...</p>
        </div>
        <ProjectList
          v-else-if="featuredProjects.length > 0"
          :projects="featuredProjects"
        />
        <div v-else class="text-center py-20">
          <p class="text-slate-400">No projects found</p>
        </div>
      </div>
    </section>

    <!-- Latest Blog Posts Section -->
    <section class="py-20 bg-slate-950 border-t border-slate-800">
      <div class="container-custom">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="section-title mb-3">Latest Articles</h2>
            <p class="section-subtitle">Thoughts on development and tech.</p>
          </div>
          <router-link
            to="/blog"
            class="text-purple-400 hover:text-purple-300 transition-smooth text-sm font-semibold flex items-center gap-2"
          >
            View All Articles <span>→</span>
          </router-link>
        </div>

        <div v-if="blogStore.loading" class="text-center py-20">
          <p class="text-slate-400">Loading articles...</p>
        </div>
        <div
          v-else-if="latestPosts.length > 0"
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <BlogCard v-for="post in latestPosts" :key="post.id" :post="post" />
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-400">No articles found</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProjectStore } from "@/store/modules/projects";
import { useBlogStore } from "@/store/modules/blog";
import Hero from "@/components/layout/Hero.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
import BlogCard from "@/components/blog/BlogCard.vue";

const projectStore = useProjectStore();
const blogStore = useBlogStore();

const featuredProjects = computed(() => projectStore.projects.slice(0, 3));
const latestPosts = computed(() => blogStore.posts.slice(0, 3));

onMounted(async () => {
  await projectStore.fetchProjects();
  await blogStore.fetchPosts();
});
</script>
