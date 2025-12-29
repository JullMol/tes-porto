<template>
  <div class="bg-[#0b0b0f] text-slate-200">
    <Hero />

    <section
      class="
      relative py-32 overflow-hidden
      border-y border-white/10
      bg-[#0b0b0f]
      "
    >
      <div
        class="pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_55%),
              radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_60%)]"
      />
      <div class="max-w-7xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Expertise & Skills
          </h2>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            Specialized in creating scalable, beautiful digital products
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="skill in skills"
            :key="skill.title"
            class="
              p-8 rounded-2xl
              bg-gradient-to-br from-white/10 to-white/5
              border border-white/10
              backdrop-blur-md
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              hover:from-white/15 hover:to-white/10
              transition
            "
          >
            <div
              class="w-14 h-14 rounded-xl
                    bg-gradient-to-br from-primary/30 to-primary/10
                    flex items-center justify-center mb-5 text-primary"
            >
              <component :is="skill.icon" class="w-7 h-7" />
            </div>

            <h3 class="text-lg font-bold mb-2 text-white">
              {{ skill.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              {{ skill.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNICAL ARSENAL -->
    <section
      class="relative py-32 px-6 overflow-hidden bg-[#0b0b0f]"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2
          class="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Technical Arsenal
        </h2>

        <div
          class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          <div
            v-for="skill in technicalSkills"
            :key="skill.name"
            class="
              flex items-center gap-3 px-6 py-3 rounded-2xl
              bg-gradient-to-r from-white/10 to-white/5
              border border-white/20
              hover:border-primary/50
              hover:shadow-lg hover:shadow-primary/20
              transition-all cursor-default
            "
          >
            <div
              class="w-2 h-2 rounded-full bg-primary
                    shadow-[0_0_14px_rgba(124,58,237,0.45)]"
            />

            <span class="font-semibold text-white text-sm">
              {{ skill.name }}
            </span>

            <span
              class="ml-auto text-xs font-mono text-primary font-bold"
            >
              {{ skill.level }}%
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="
      relative py-32 px-6 overflow-hidden
      bg-[#0b0b0f]
    ">
      <div
        class="pointer-events-none absolute inset-0
              bg-[linear-gradient(to_bottom,rgba(99,102,241,0.08),transparent_35%)]"
      />
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-16">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h2>
            <p class="text-lg text-slate-400">
              Projects that define my journey.
            </p>
          </div>

          <router-link
            to="/projects"
            class="hidden md:flex items-center gap-2
                  text-sm font-medium px-5 py-2.5
                  border border-white/20 rounded-full
                  hover:bg-white/5 transition"
          >
            View All Projects
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </router-link>
        </div>

        <!-- JANGAN TAMBAH GRID DI SINI -->
        <ProjectList
          v-if="featuredProjects.length"
          :projects="featuredProjects"
        />
      </div>
    </section>
  
      <!-- CTA -->
    <section class="relative py-32 px-6 overflow-hidden">
      <div class="absolute inset-0 bg-primary/5"></div>

      <div
        class="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2
          class="text-5xl md:text-7xl font-display font-bold mb-8"
        >
          Have a project in mind?
        </h2>

        <p
          class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I'm currently available for freelance work and open to full-time
          opportunities. Let's build something amazing together.
        </p>

        <RouterLink to="/contact">
          <button
            class="
              h-16 px-10 rounded-full text-lg font-bold
              bg-primary text-primary-foreground
              border border-primary-border
              shadow-lg shadow-primary/25
              hover:bg-primary/90
              transition
            "
          >
            Let's Talk
          </button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Code,
  Database,
  PanelsTopLeft,
  Terminal
} from "lucide-vue-next"

const skills = [
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
]

const technicalSkills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Python", level: 70 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 60 },
  { name: "Figma", level: 70 },
];

import { ref, computed, onMounted } from "vue";
import { useProjectStore } from "@/store/modules/projects";
import { useBlogStore } from "@/store/modules/blog";
import Hero from "@/components/layout/Hero.vue";
import ProjectList from "@/components/projects/ProjectListWork.vue";

const projectStore = useProjectStore();
const blogStore = useBlogStore();

const featuredProjects = computed(() =>
  (projectStore.projects || []).slice(0, 3)
);

const latestPosts = computed(() =>
  (blogStore.posts || []).slice(0, 3)
);

onMounted(async () => {
  await projectStore.fetchProjects();
  await blogStore.fetchPosts();
});
</script>