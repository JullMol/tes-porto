<template>
  <!-- Filter -->
  <div class="flex flex-wrap gap-2 mb-12">
    <button
      v-for="tag in tags"
      :key="tag"
      @click="activeTag = tag"
      class="px-6 py-2 rounded-full text-sm transition"
      :class="activeTag === tag
        ? 'bg-white text-black'
        : 'bg-white/5 text-muted-foreground hover:bg-white/10'"
    >
      {{ tag }}
    </button>
  </div>

  <!-- Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ProjectCardWork
      v-for="(project, index) in filteredProjects"
      :key="project.title"
      :project="project"
      :delay="index * 0.08"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCardWork from './ProjectCardWork.vue'

const activeTag = ref('All')

const projects = ref([
  {
    title: 'E-Commerce Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Dashboard for online store analytics.',
    demo: '#',
    github: 'https://github.com/...'
  },
  {
    title: 'Social Media App',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    tags: ['Next.js', 'Prisma', 'Socket.io'],
    description: 'Real-time social media platform.',
    demo: '#',
    github: 'https://github.com/...'
  },
  {
    title: 'Task Management Tool',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    tags: ['Vue.js', 'Firebase', 'Pinia'],
    description: 'Drag-and-drop task manager.',
    demo: '#',
    github: 'https://github.com/...'
  }
])

const tags = computed(() => [
  'All',
  ...new Set(projects.value.flatMap(p => p.tags))
])

const filteredProjects = computed(() => {
  if (activeTag.value === 'All') return projects.value
  return projects.value.filter(p =>
    p.tags.includes(activeTag.value)
  )
})
</script>