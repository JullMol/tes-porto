<template>
  <div class="bg-[#0b0b0f] text-slate-200 overflow-hidden">
    <!-- HERO -->
    <Hero />

    <!-- ===================== -->
    <!-- EXPERTISE & SKILLS -->
    <!-- ===================== -->
    <section class="relative py-32 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-[#0b0b0f]"
      />

      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black mb-4">
            Expertise & Skills
          </h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            Specialized in crafting scalable, elegant digital products
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in expertise"
            :key="item.title"
            class="group p-8 rounded-2xl
                   bg-gradient-to-br from-white/10 to-white/5
                   border border-white/15
                   hover:-translate-y-2
                   hover:border-purple-400/40
                   hover:shadow-xl hover:shadow-purple-500/20
                   transition-all duration-300"
          >
            <div
              class="w-14 h-14 mb-6 rounded-xl
                     bg-gradient-to-br from-purple-500/30 to-purple-500/10
                     flex items-center justify-center text-purple-400
                     group-hover:scale-110 transition"
            >
              <component :is="item.icon" class="w-7 h-7" />
            </div>

            <h3 class="text-lg font-bold mb-2 text-white">
              {{ item.title }}
            </h3>
            <p class="text-sm text-white/60 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== -->
    <!-- TECHNICAL ARSENAL -->
    <!-- ===================== -->
    <section class="py-32 bg-white/5 border-y border-white/10">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-black mb-16 text-center">
          Technical Arsenal
        </h2>

        <div
          class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="flex items-center gap-3 px-6 py-3 rounded-2xl
                   bg-gradient-to-r from-white/10 to-white/5
                   border border-white/20
                   hover:border-purple-400/50
                   hover:shadow-lg hover:shadow-purple-500/20
                   transition"
          >
            <span class="w-2 h-2 rounded-full bg-purple-400" />
            <span class="font-semibold text-white text-sm">
              {{ skill.name }}
            </span>
            <span
              class="ml-auto text-xs font-mono font-bold text-purple-400"
            >
              {{ skill.level }}%
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== -->
    <!-- SELECTED WORK -->
    <!-- ===================== -->
    <section class="relative py-32 px-6 bg-[#0b0b0f]">
      <div
        class="pointer-events-none absolute inset-0
               bg-[linear-gradient(to_bottom,rgba(99,102,241,0.08),transparent_35%)]"
      />

      <div class="relative max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-16">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h2>
            <p class="text-lg text-slate-400">
              Projects that define my journey.
            </p>
          </div>

          <RouterLink
            to="/projects"
            class="hidden md:flex items-center gap-2
                   text-sm font-medium px-5 py-2.5
                   border border-white/20 rounded-full
                   hover:bg-white/5 transition"
          >
            View All Projects →
          </RouterLink>
        </div>

        <!-- Project grid handled INSIDE ProjectList -->
        <ProjectList
          v-if="featuredProjects.length"
          :projects="featuredProjects"
        />
      </div>
    </section>

    <!-- ===================== -->
    <!-- CTA -->
    <!-- ===================== -->
    <section class="relative py-32 px-6 overflow-hidden">
      <div class="absolute inset-0 bg-primary/5"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-display font-bold mb-8">
          Have a project in mind?
        </h2>

        <p class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to full-time
          opportunities. Let's build something amazing together.
        </p>

        <RouterLink to="/about">
          <button
            class="h-16 px-10 rounded-full text-lg font-bold
                   bg-primary text-primary-foreground
                   border border-primary-border
                   shadow-lg shadow-primary/25
                   hover:bg-primary/90
                   transition"
          >
            Let's Talk
          </button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import {
  Code,
  Database,
  PanelsTopLeft,
  Terminal,
} from "lucide-vue-next";

import Hero from "@/components/layout/Hero.vue";
import ProjectList from "@/components/projects/ProjectListWork.vue";

import { useProjectStore } from "@/store/modules/projects";
import { useBlogStore } from "@/store/modules/blog";

/* ===== Expertise ===== */
const expertise = [
  {
    title: "Frontend Development",
    desc: "React, Next.js, Vue, Tailwind CSS",
    icon: PanelsTopLeft,
  },
  {
    title: "Backend Systems",
    desc: "Node.js, Python, PostgreSQL, MongoDB",
    icon: Database,
  },
  {
    title: "Web Architecture",
    desc: "Scalable Design, API Development, Optimization",
    icon: Code,
  },
  {
    title: "DevOps & Tools",
    desc: "Docker, AWS, CI/CD, Git Workflow",
    icon: Terminal,
  },
];

/* ===== Technical Arsenal ===== */
const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Vue.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Python", level: 70 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 60 },
  { name: "Figma", level: 70 },
];

/* ===== Stores ===== */
const projectStore = useProjectStore();
const blogStore = useBlogStore();

const featuredProjects = computed(() =>
  (projectStore.projects || []).slice(0, 3)
);

onMounted(async () => {
  await projectStore.fetchProjects();
  await blogStore.fetchPosts();
});
</script>