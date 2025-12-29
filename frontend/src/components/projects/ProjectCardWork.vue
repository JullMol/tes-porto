<template>
  <div
    class="group relative rounded-3xl overflow-hidden border border-slate-800
           bg-gradient-to-br from-secondary/40 to-secondary/20
           transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
  >
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="project.image_url"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />
    </div>

    <!-- Content -->
    <div class="p-6 md:p-8">
      <!-- Tech -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs font-mono px-2 py-1 rounded-md
                 bg-purple-500/20 text-purple-300 border border-purple-500/30"
        >
          {{ tech }}
        </span>
      </div>

      <h3 class="text-2xl font-bold text-white mb-2">
        {{ project.title }}
      </h3>

      <p class="text-slate-400 text-sm leading-relaxed mb-4">
        {{ project.description }}
      </p>

      <div class="flex gap-4">
        <a
          v-if="project.live_url"
          :href="project.live_url"
          target="_blank"
          class="text-sm text-white hover:text-purple-400 transition"
        >
          Live
        </a>
        <a
          v-if="project.github_url"
          :href="project.github_url"
          target="_blank"
          class="text-sm text-slate-400 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>