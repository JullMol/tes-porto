<template>
  <div
    class="card-glass group overflow-hidden cursor-pointer hover:border-purple-500/50 transition-smooth"
    @click="goToDetail"
  >
    <!-- Image -->
    <div v-if="project.image_url" class="relative h-48 overflow-hidden">
      <img
        :src="project.image_url"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-smooth"
      />
      <div
        class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-smooth"
      ></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        class="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-smooth"
      >
        {{ project.title }}
      </h3>

      <p class="text-slate-400 text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-3">
        <a
          v-if="project.github_url"
          :href="project.github_url"
          target="_blank"
          @click.stop
          class="text-xs text-purple-400 hover:text-purple-300 transition-smooth"
        >
          GitHub
        </a>
        <a
          v-if="project.live_url"
          :href="project.live_url"
          target="_blank"
          @click.stop
          class="text-xs text-purple-400 hover:text-purple-300 transition-smooth"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goToDetail = () => {
  router.push(`/projects/${props.project.id}`);
};
</script>
