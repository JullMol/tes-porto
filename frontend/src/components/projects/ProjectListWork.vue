<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ProjectCardWork
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectCardWork from "./ProjectCardWork.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>