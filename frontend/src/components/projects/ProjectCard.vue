<template>
  <div
    class="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
    @click="goToDetail"
  >
    <!-- Image -->
    <div v-if="project.image_url" class="relative h-48 overflow-hidden">
      <img
        :src="project.image_url"
        :alt="project.title"
        class="mb-4 h-44 w-full rounded-xl object-cover"
      />
      <div
        class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-smooth"
      ></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        class="text-lg font-semibold tracking-tight mb-1"
      >
        {{ project.title }}
      </h3>

      <p class="text-sm text-slate-400 mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-300"
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
