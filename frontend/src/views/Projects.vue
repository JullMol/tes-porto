<template>
  <div class="bg-gradient-dark min-h-screen">
    <!-- Header -->
    <section class="py-20 border-b border-slate-800">
      <div class="container-custom">
        <h1 class="section-title text-5xl md:text-6xl mb-4">My Work</h1>
        <p class="section-subtitle text-lg max-w-2xl">
          A collection of projects showcasing my journey in software
          development, from web applications to open source tools.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-8 border-b border-slate-800">
      <div class="container-custom">
        <div class="flex flex-wrap gap-3">
          <button
            @click="selectedFilter = null"
            :class="[
              'badge text-sm px-4 py-2',
              !selectedFilter
                ? 'bg-purple-600 border-purple-500'
                : 'hover:border-slate-600',
            ]"
          >
            All Projects
          </button>
          <button
            v-for="tech in uniqueTechs"
            :key="tech"
            @click="selectedFilter = tech"
            :class="[
              'badge text-sm px-4 py-2',
              selectedFilter === tech
                ? 'bg-purple-600 border-purple-500'
                : 'hover:border-slate-600',
            ]"
          >
            {{ tech }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20">
      <div class="container-custom">
        <div v-if="loading" class="flex justify-center">
          <LoadingSpinner />
        </div>
        <div v-else-if="error" class="text-center py-20">
          <p class="text-red-400 mb-4">{{ error }}</p>
          <button @click="fetchProjects" class="btn btn-accent">Retry</button>
        </div>
        <div
          v-else-if="filteredProjects.length === 0"
          class="text-center py-20"
        >
          <p class="text-slate-400 text-lg">No projects found</p>
        </div>
        <ProjectList v-else :projects="filteredProjects" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useProjectStore } from "../store/modules/projects";
import ProjectList from "../components/projects/ProjectList.vue";
import LoadingSpinner from "../components/common/LoadingSpinner.vue";

const projectsStore = useProjectStore();
const selectedFilter = ref(null);

const projects = computed(() => projectsStore.projects);
const loading = computed(() => projectsStore.loading);
const error = computed(() => projectsStore.error);

const uniqueTechs = computed(() => {
  const techs = new Set();
  projects.value.forEach((project) => {
    if (project.technologies && Array.isArray(project.technologies)) {
      project.technologies.forEach((tech) => techs.add(tech));
    }
  });
  return Array.from(techs).sort();
});

const filteredProjects = computed(() => {
  if (!selectedFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.technologies?.includes(selectedFilter.value)
  );
});

const fetchProjects = async () => {
  await projectsStore.fetchProjects();
};

onMounted(() => {
  fetchProjects();
});
</script>
