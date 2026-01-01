<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :enter="{ opacity: 1, y: 0 }"
    :hovered="{ scale: 1.03 }"
    :transition="{ delay, duration: 0.6, ease: 'easeOut' }"
    class="group relative rounded-3xl overflow-hidden"
  >
    <div class="relative aspect-video w-full overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

      <img
        :src="project.image"
        :alt="project.title"
        class="
          w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-125 group-hover:blur-[1px]
        "
      />

      <div
        class="
          absolute inset-0 z-20
          flex flex-col items-center justify-center gap-4
          bg-black/50 backdrop-blur-sm
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300
        "
      >
        <div class="flex gap-4">
          <RouterLink
            v-if="project.slug"
            :to="`/projects/${project.slug}`"
            @click.stop
          >
            <button
              class="magnetic icon-btn bg-purple-500 text-white"
              @mousemove="magneticMove"
              @mouseleave="magneticLeave"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v12m8-6H4" />
              </svg>
            </button>
          </RouterLink>

          <a :href="project.demo" target="_blank" @click.stop>
            <button
              class="magnetic icon-btn bg-white text-black"
              @mousemove="magneticMove"
              @mouseleave="magneticLeave"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.828 10.172a4 4 0 015.656 5.656l-3.536 3.536a4 4 0 01-5.656-5.656m-1.414 1.414a4 4 0 01-5.656-5.656l3.536-3.536a4 4 0 015.656 5.656"
                />
              </svg>
            </button>
          </a>

          <a :href="project.github" target="_blank" @click.stop>
            <button
              class="magnetic icon-btn border border-white text-white"
              @mousemove="magneticMove"
              @mouseleave="magneticLeave"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.86 10.95.57.1.78-.25.78-.55v-2.03c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.07 11.07 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
                />
              </svg>
            </button>
          </a>
        </div>

        <p class="text-white text-sm font-medium mt-2">View Project</p>
      </div>
    </div>

    <div class="p-6 md:p-8 bg-gradient-to-br from-secondary/40 to-secondary/20">
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary"
        >
          {{ tag }}
        </span>
      </div>

      <h3 class="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition">
        {{ project.title }}
      </h3>

      <p class="text-slate-300 text-sm">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
  delay: {
    type: Number,
    default: 0
  }
})

const magneticMove = (e) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
}

const magneticLeave = (e) => {
  e.currentTarget.style.transform = 'translate(0,0)'
}
</script>

<style scoped>
.icon-btn {
  height: 48px;
  width: 48px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic {
  transition: transform 0.15s ease-out;
}
</style>