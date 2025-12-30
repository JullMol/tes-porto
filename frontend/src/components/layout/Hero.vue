<template>
  <section
    class="relative min-h-screen flex items-center pt-28 pb-24 px-4
           overflow-hidden bg-[#0b0b0f]"
    @mousemove="onMouseMove"
  >
    <!-- BACKGROUND BLOBS (PARALLAX) -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-[20%] -right-[10%] w-[620px] h-[620px]
               bg-purple-500/30 rounded-full blur-[140px]"
        :style="blobStyle(0.02)"
      />
      <div
        class="absolute top-[45%] -left-[15%] w-[520px] h-[520px]
               bg-fuchsia-500/20 rounded-full blur-[120px]"
        :style="blobStyle(0.03)"
      />
      <div
        class="absolute bottom-[-10%] right-[5%] w-[420px] h-[420px]
               bg-purple-400/10 rounded-full blur-[120px]"
        :style="blobStyle(0.015)"
      />
    </div>

    <!-- SUBTLE GRID -->
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.25]"
      :style="gridStyle"
    />

    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="max-w-4xl">
        <!-- Availability -->
        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full
                 bg-gradient-to-r from-white/10 to-white/5
                 border border-white/20 mb-10"
        >
          <span class="w-2 h-2 rounded-full bg-emerald-400" />
          <span class="text-sm font-medium text-white/90">
            Available for exciting projects
          </span>
        </div>

        <!-- HEADLINE -->
        <h1
          class="text-6xl md:text-7xl lg:text-8xl font-black leading-[1]
                 tracking-tight mb-10"
        >
          Building
          <span
            class="bg-gradient-to-r from-purple-400 to-fuchsia-400
                   bg-clip-text text-transparent"
          >
            digital
          </span>
          <br />
          <span
            class="bg-gradient-to-r from-purple-300 to-purple-500
                   bg-clip-text text-transparent"
          >
            experiences
          </span>
          that matter.
        </h1>

        <!-- SUBTITLE -->
        <p
          class="text-xl md:text-2xl text-white/70 max-w-2xl
                 leading-relaxed mb-14"
        >
          Full Stack Developer crafting high-performance web applications
          with modern technologies.
        </p>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center justify-center
                   h-14 px-10 rounded-full
                   bg-white text-black font-bold text-lg
                   hover:bg-white/90 transition"
          >
            Explore My Work
          </RouterLink>

          <RouterLink
            to="/about"
            class="inline-flex items-center justify-center
                   h-14 px-10 rounded-full
                   border border-white/30 text-white font-bold text-lg
                   hover:bg-white/10 transition"
          >
            Let’s Connect
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

/* ===== Mouse Parallax ===== */
const mouseX = ref(0)
const mouseY = ref(0)

const onMouseMove = (e) => {
  const { innerWidth, innerHeight } = window
  mouseX.value = (e.clientX / innerWidth - 0.5) * 2
  mouseY.value = (e.clientY / innerHeight - 0.5) * 2
}

const blobStyle = (strength = 0.04) => ({
  transform: `
    translate(
      ${mouseX.value * 80 * strength}px,
      ${mouseY.value * 80 * strength}px
    )
      rotateX(${mouseY.value * 8}deg)
      rotateY(${mouseX.value * 8}deg)
  `,
})

/* ===== Subtle Grid ===== */
const gridStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
  `,
  backgroundSize: "64px 64px",
  maskImage:
    "radial-gradient(circle at center, black 40%, transparent 75%)",
}
</script>