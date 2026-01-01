<template>
  <div
    v-if="project"
    class="min-h-screen bg-[#0b0b0f] text-white"
  >
    <section class="relative h-[70vh] flex items-center">
      <img
        :src="project.heroImage"
        class="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b0b0f]" />

      <div class="relative z-10 max-w-5xl mx-auto px-6">
        <h1 class="text-4xl md:text-6xl font-black mb-4">
          {{ project.title }}
        </h1>
        <p class="text-xl text-white/70">
          {{ project.subtitle }}
        </p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-24">
      <Block title="Problem">
        <p>{{ project.sections.problem }}</p>
      </Block>

      <Block title="Approach">
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="item in project.sections.approach"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </Block>

      <Block title="Tech Stack">
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tech in project.sections.tech"
            :key="tech"
            class="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </Block>

      <Block title="Impact">
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="item in project.sections.impact"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </Block>
    </section>
  </div>

  <div
    v-else
    class="min-h-screen flex items-center justify-center text-white/60"
  >
    Project not found
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useProjectStore } from "@/store/modules/projects"
import Block from "@/components/Block_temp.vue"

const route = useRoute();
const projectStore = useProjectStore();

onMounted(async () => {
  if (!projectStore.projects.length) {
    await projectStore.fetchProjects()
  }
})

const project = computed(() =>
  projectStore.getBySlug(route.params.slug)
);
</script>