<template>
  <div class="relative bg-[#0b0b0f] text-slate-200 overflow-hidden">
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute top-[10%] left-[8%] w-[520px] h-[520px]
                  bg-purple-500/12 rounded-full blur-[180px]" />
      <div class="absolute bottom-[18%] right-[10%] w-[420px] h-[420px]
                  bg-fuchsia-500/10 rounded-full blur-[160px]" />
      <div class="absolute inset-0 opacity-[0.06]
                  bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>

    <Hero />

    <section class="relative py-32">
      <div
        class="absolute inset-0
        bg-[radial-gradient(circle_at_70%_15%,rgba(168,85,247,0.18),transparent_45%)]"
      />

      <div class="relative max-w-7xl mx-auto px-4">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black mb-4">
            Core Expertise
          </h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            My primary focus areas based on hands-on projects and applied research.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="item in expertise"
            :key="item.title"
            class="tilt-card group"
            @mousemove="onTilt"
            @mouseleave="resetTilt"
          >
            <div class="tilt-glass" />

            <div class="relative z-10">
              <div
                class="w-14 h-14 mb-6 rounded-xl
                      bg-gradient-to-br from-purple-500/30 to-purple-500/10
                      flex items-center justify-center text-purple-400
                      transition-transform duration-300
                      group-hover:scale-110"
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
      </div>
    </section>

    <section class="relative py-32">
      <div class="relative max-w-6xl mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16">
          Tools I Use to Build Production-Ready Systems
        </h2>

        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="item in skills"
            :key="item.name"
            class="arsenal-chip"
            @mousemove="onChipTilt"
            @mouseleave="resetChipTilt"
          >
            <span class="dot" />
            <span class="label">{{ item.name }}</span>

            <div class="flex gap-1 ml-2">
              <span
                v-for="i in 5"
                :key="i"
                class="w-1.5 h-1.5 rounded-full"
                :class="i <= item.level ? 'bg-purple-400' : 'bg-white/20'"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-32 px-6">
      <div
        class="absolute -top-24 left-1/2 -translate-x-1/2
              w-[760px] h-[360px]
              bg-purple-500/12 blur-[160px]"
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

        <ProjectList
          v-if="featuredProjects.length"
          :projects="featuredProjects"
          :show-filters="false"
        />
      </div>
    </section>

    <section class="relative py-32 px-6">
      <div
        class="absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_65%)]"
      />

      <div class="relative max-w-4xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-bold mb-8">
          Have a project in mind?
        </h2>

        <p class="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to full-time
          opportunities. Let's build something amazing together.
        </p>

        <RouterLink to="/about">
          <button
            class="h-16 px-12 rounded-full text-lg font-bold
                bg-primary text-primary-foreground
                  shadow-xl shadow-primary/30
                  hover:scale-[1.05] hover:bg-primary/90
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
import { computed, onMounted } from "vue"
import { Code, Database, PanelsTopLeft, Terminal } from "lucide-vue-next"

import Hero from "@/components/layout/Hero.vue"
import ProjectList from "@/components/projects/ProjectListWork.vue"

import { useProjectStore } from "@/store/modules/projects"
import { useBlogStore } from "@/store/modules/blog"

const expertise = [
  {
    title: "Data Science & Machine Learning",
    desc: "Building predictive and analytical models using Python, Pandas, NumPy, and Scikit-learn for real-world decision making.",
    icon: PanelsTopLeft,
  },
  {
    title: "Data Analytics & Business Intelligence",
    desc: "Transforming raw data into actionable insights through dashboards, visualization, and analytical storytelling.",
    icon: Database,
  },
  {
    title: "Full-Stack & System Development",
    desc: "Designing end-to-end applications using Vue, Tailwind, Flask, PostgreSQL, and REST APIs with performance in mind.",
    icon: Code,
  },
  {
    title: "Applied Research & Innovation",
    desc: "Applying technology to real problems such as healthcare analytics, food security, and AI-powered productivity tools.",
    icon: Terminal,
  },
]

const skills = [
  { name: "Python", level: 5 },
  { name: "Pandas", level: 5 },
  { name: "NumPy", level: 5 },
  { name: "Scikit-learn", level: 4 },
  { name: "Power BI", level: 4 },
  { name: "Data Visualization", level: 5 },
  { name: "Statistical Analysis", level: 4 },
  { name: "Flask", level: 4 },
  { name: "PostgreSQL", level: 4 },
  { name: "REST API", level: 4 },
  { name: "Golang", level: 4 },
  { name: "Laravel", level: 4 },
  { name: "Vue.js", level: 4 },
  { name: "Tailwind CSS", level: 5 },
  { name: "Git", level: 4 },
  { name: "Docker", level: 4 },
  { name: "Figma", level: 4 },
]

const projectStore = useProjectStore()
const blogStore = useBlogStore()

const featuredProjects = computed(() => {
  return (projectStore.projects || [])
    .slice(0, 3)
    .map((p) => ({
      ...p,
      image: p.heroImage,
      description: p.summary,
      tags: p.sections?.tech || [],
      demo: p.links?.demo,
      github: p.links?.github,
    }))
})

onMounted(async () => {
  // await blogStore.fetchPosts() 
})

const isMobile = window.innerWidth < 768

const onTilt = (e) => {
  if (isMobile) return

  const card = e.currentTarget
  const rect = card.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const midX = rect.width / 2
  const midY = rect.height / 2

  const rotateX = ((y - midY) / midY) * -10
  const rotateY = ((x - midX) / midX) * 10

  card.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateZ(18px)
  `
}

const onChipTilt = (e) => {
  if (isMobile) return

  const el = e.currentTarget
  const rect = el.getBoundingClientRect()

  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  el.style.transform = `
    perspective(600px)
    rotateX(${y * -0.08}deg)
    rotateY(${x * 0.08}deg)
    translateZ(6px)
  `
}

const resetTilt = (e) => {
  e.currentTarget.style.transform = "none"
}

const resetChipTilt = (e) => {
  e.currentTarget.style.transform = "none"
}
</script>

<style scoped>
.tilt-card {
  position: relative;
  padding: 2rem;
  border-radius: 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.12),
    rgba(255,255,255,0.04)
  );
  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(12px);
  transform-style: preserve-3d;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow:
    0 30px 60px rgba(0,0,0,0.35);
}

.tilt-card:hover {
  box-shadow:
    0 40px 80px rgba(168,85,247,0.35);
}

.tilt-glass {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    linear-gradient(
      120deg,
      rgba(255,255,255,0.35),
      transparent 55%
    );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tilt-card:hover .tilt-glass {
  opacity: 0.25;
}

.arsenal-chip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.4rem;
  border-radius: 9999px;

  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.12),
    rgba(255,255,255,0.04)
  );

  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(10px);
  white-space: nowrap;

  transform-style: preserve-3d;
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

.arsenal-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(168,85,247,0.35);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #a855f7;
}

.label {
  font-weight: 600;
  color: white;
  font-size: 0.85rem;
}
</style>