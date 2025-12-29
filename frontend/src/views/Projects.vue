<template>
  <section class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Heading -->
      <div class="mb-16">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          My Work
        </h1>
        <p class="text-xl text-slate-400 max-w-2xl">
          A collection of projects showcasing my journey in software development,
          from web applications to open source tools.
        </p>
      </div>

      <!-- Filters (visual only for now) -->
      <section class="pt-32 pb-20 px-4">
          <div class="max-w-7xl mx-auto">

            <!-- Filter Buttons -->
            <div class="flex flex-wrap gap-2 mb-12">
              <button
                v-for="filter in filters"
                :key="filter"
                @click="activeFilter = filter"
                class="px-6 py-2 rounded-full text-sm font-medium transition-all"
                :class="
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                "
              >
                {{ filter }}
              </button>
            </div>

            <ProjectList :projects="filteredProjects" />
          </div>
        </section>

      <!-- Projects -->
      <ProjectListWork :projects="projects" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import ProjectList from "@/components/projects/ProjectListWork.vue";

const projects = ref([
  /* data project kamu */
]);

const filters = [
  "All",
  "React",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Pinia",
];

const activeFilter = ref("All");

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") return projects.value;

  return projects.value.filter((p) =>
    p.technologies?.includes(activeFilter.value)
  );
});
</script>