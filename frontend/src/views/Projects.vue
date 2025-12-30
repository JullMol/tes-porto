<template>
  <section class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        class="mb-16"
      >
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          My Work
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl">
          A collection of projects showcasing my journey in software development.
        </p>
      </div>

      <!-- Skeleton -->
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

      <!-- Actual content -->
      <ProjectListWork v-else />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectListWork from '@/components/projects/ProjectListWork.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})
</script>