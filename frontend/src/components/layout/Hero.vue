<template>
  <section
    ref="hero"
    class="relative min-h-screen flex items-center justify-center
           overflow-hidden bg-[#0b0b0f]"
    @mousemove="onMouseMove"
    @mouseleave="resetTilt"
  >
    <!-- ===============================
         GLOBAL FAKE LIGHT
    ================================ -->
    <div
      class="pointer-events-none absolute inset-0 transition-opacity duration-300"
      :style="lightStyle"
    />

    <!-- ===============================
         HERO CARD (3D ROOT)
    ================================ -->
    <div
      ref="card"
      class="relative z-10 max-w-7xl w-full mx-6
             grid lg:grid-cols-2 gap-20 items-center
             rounded-[2.5rem]
             bg-white/5 backdrop-blur-xl
             border border-white/15
             shadow-2xl shadow-purple-500/20
             transform-gpu will-change-transform
             px-12 py-20"
      :style="cardStyle"
    >
      <!-- ===============================
           LEFT CONTENT (DEPTH STACK)
      ================================ -->
      <div class="space-y-8">
        <h1
          class="text-5xl md:text-7xl font-black leading-tight"
          :style="z(42)"
        >
          Data
          <span class="bg-gradient-to-r from-purple-400 to-fuchsia-400
                       bg-clip-text text-transparent">
            Engineer
          </span>
          <br />
          Building Intelligent Systems
        </h1>

        <p
          class="text-lg text-white/65 max-w-xl"
          :style="z(32)"
        >
        I specialize in data science, machine learning, and full-stack systems
        turning complex data into scalable, meaningful digital solutions.
        </p>

        <div class="flex gap-6 pt-4" :style="z(26)">
          <RouterLink to="/projects">
            <button
              class="px-8 py-4 rounded-full border border-white/25
                     hover:bg-white/10 transition"
            >
              Explore My Work
            </button>
          </RouterLink>

          <a
            href="https://www.linkedin.com/in/dimas-rafi-izzulhaq-b94058378"
            target="_blank"
          >
            <button
              class="px-8 py-4 rounded-full
                     bg-purple-600 hover:bg-purple-700
                     shadow-xl shadow-purple-500/30 transition"
            >
              Connect on LinkedIn
            </button>
          </a>
        </div>
      </div>

      <!-- ===============================
           RIGHT — TRUE 3D LOTTIE
      ================================ -->
      <div
        class="relative flex items-center justify-center"
        :style="z(60)"
      >
        <!-- glass reflection -->
        <div
          class="absolute inset-0 rounded-3xl
                 bg-gradient-to-tr from-white/10 to-transparent
                 blur-xl opacity-40"
        />

        <dotlottie-wc
          ref="lottie"
          src="https://lottie.host/c8b0bbcf-1b1a-434b-96eb-7c4b070f906c/TB0x57QIWa.lottie"
          autoplay
          loop
          style="width: 360px; height: 360px;"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

/* ===============================
   REFS
================================ */
const hero = ref(null)
const card = ref(null)
const lottie = ref(null)

const mouseX = ref(0)
const mouseY = ref(0)

/* ===============================
   ENV CHECK
================================ */
const isMobile =
  window.matchMedia("(max-width: 768px)").matches ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/* ===============================
   MOUSE TRACKING
================================ */
const onMouseMove = (e) => {
  if (isMobile || !hero.value) return

  const rect = hero.value.getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width - 0.5
  mouseY.value = (e.clientY - rect.top) / rect.height - 0.5
}

const resetTilt = () => {
  mouseX.value = 0
  mouseY.value = 0
}

/* ===============================
   3D CARD TRANSFORM
================================ */
const cardStyle = computed(() => {
  if (isMobile) return {}

  const rx = mouseY.value * -10
  const ry = mouseX.value * 12

  return {
    transform: `
      perspective(1400px)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
    `,
  }
})

/* ===============================
   FAKE DYNAMIC LIGHT
================================ */
const lightStyle = computed(() => {
  if (isMobile) return { opacity: 0 }

  return {
    background: `
      radial-gradient(
        circle at ${50 + mouseX.value * 30}% ${50 + mouseY.value * 30}%,
        rgba(168,85,247,0.22),
        transparent 55%
      )
    `,
  }
})

/* ===============================
   DEPTH HELPER
================================ */
const z = (value) => {
  if (isMobile) return {}
  return {
    transform: `translateZ(${value}px)`,
  }
}

/* ===============================
   FORCE LOTTIE PLAY (ANTI JPG)
================================ */
onMounted(() => {
  setTimeout(() => {
    lottie.value?.play?.()
  }, 200)
})
</script>