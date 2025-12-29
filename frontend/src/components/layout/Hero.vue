<template>
  <section
    class="relative min-h-[92vh] flex items-center
           pt-20 pb-16 md:pt-28 md:pb-24
           px-4 overflow-hidden"
  >
    <!-- ================= BACKGROUND ================= -->

    <!-- Grid / Noise Overlay -->
    <div
      class="pointer-events-none absolute inset-0 z-0"
      :style="gridStyle"
    />

    <!-- Blob Lights -->
    <div
      class="absolute -top-[20%] -right-[15%]
             w-[700px] h-[700px]
             bg-primary/30 rounded-full blur-[140px]"
    />
    <div
      class="absolute top-[35%] -left-[15%]
             w-[550px] h-[550px]
             bg-blue-500/20 rounded-full blur-[120px]"
    />
    <div
      class="absolute bottom-[-15%] right-[10%]
             w-[450px] h-[450px]
             bg-purple-500/15 rounded-full blur-[110px]"
    />

    <!-- ================= CONTENT ================= -->

    <div class="max-w-7xl mx-auto relative z-10 w-full">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                 bg-gradient-to-r from-white/10 to-white/5
                 border border-white/20 mb-6"
        >
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span class="text-sm font-mono text-slate-200 font-medium">
            Available for exciting projects
          </span>
        </div>

        <!-- Heading -->
        <h1
          class="text-7xl md:text-8xl lg:text-9xl
                 font-bold leading-[1.05]
                 tracking-tight mb-6"
        >
          Building
          <span class="gradient-text-animated"> digital </span>
          <br />
          <span class="text-gradient-primary">experiences</span>
          that matter.
        </h1>

        <!-- Description -->
        <p
          class="text-lg md:text-xl
                 text-slate-400 max-w-2xl
                 leading-relaxed mb-10 font-light"
        >
          Full Stack Developer crafting beautiful, high-performance web
          applications with cutting-edge technologies. Let's turn your ideas
          into reality.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="scrollTo('work')"
            class="h-14 px-10 rounded-full text-lg font-bold
                   bg-white text-black hover:bg-white/90
                   transition-all"
          >
            Explore My Work
          </button>

          <button
            @click="scrollTo('contact')"
            class="h-14 px-10 rounded-full text-lg font-bold
                   border border-white/30 text-white
                   hover:border-white/50 hover:bg-white/5
                   transition-all"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>

    <!-- ================= SCROLL CUE ================= -->

    <div
      class="absolute bottom-12 left-1/2
             -translate-x-1/2 flex justify-center"
    >
      <div
        class="w-6 h-10 border-2 border-white/30
               rounded-full flex justify-center"
      >
        <div
          class="w-1 h-2 bg-white rounded-full
                 mt-2 animate-scroll"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue"
import { useProfileStore } from "@/store/modules/profile"

const profileStore = useProfileStore()

const gridStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
  `,
  backgroundSize: "64px 64px",
  maskImage:
    "radial-gradient(circle at center, black 40%, transparent 75%)",
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

onMounted(async () => {
  try {
    await profileStore.fetchProfile()
  } catch {
    /* fallback silent */
  }
})
</script>

<style scoped>
/* ===== Gradient Text ===== */
.gradient-text-animated {
  background: linear-gradient(
    90deg,
    #ffffff,
    #38bdf8,
    #6366f1
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-x 8s ease infinite;
}

.text-gradient-primary {
  background: linear-gradient(
    90deg,
    #818cf8,
    #a855f7
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== Animations ===== */
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(14px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}
</style>