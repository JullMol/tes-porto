<template>
  <section class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        class="mb-20 relative"
      >
        <div class="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
            Selected
          </span>
          <br class="md:hidden" />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 animate-gradient">
            Projects
          </span>
        </h1>
        <div class="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full mb-8" />
        
        <p class="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Applied projects across data science, machine learning,
          analytics, and full-stack system development.
        </p>
      </div>

      <div
        v-if="isLoading"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="rounded-3xl overflow-hidden bg-white/5 animate-pulse"
        >
          <div class="aspect-video bg-white/10"></div>
          <div class="p-6 space-y-3">
            <div class="h-4 w-1/2 bg-white/10 rounded"></div>
            <div class="h-3 w-full bg-white/10 rounded"></div>
            <div class="h-3 w-4/5 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>

      <ProjectListWork v-else :projects="formattedProjects" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ProjectListWork from '@/components/projects/ProjectListWork.vue'
import { useProjectStore } from '@/store/modules/projects'

const isLoading = ref(true)
const projectStore = useProjectStore()

const formattedProjects = computed(() => {
  return projectStore.projects.map(p => ({
    ...p,
    image: p.heroImage,
    description: p.summary,
    tags: p.sections?.tech || [],
    demo: p.links?.demo,
    github: p.links?.github
  }))
})

onMounted(async () => {
  if (!projectStore.projects.length) {
    await projectStore.fetchProjects()
  }
  
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})
</script>