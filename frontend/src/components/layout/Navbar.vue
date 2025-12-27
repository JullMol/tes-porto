<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <!-- Backdrop blur -->
    <div
      class="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
      :class="{ 'bg-slate-950/95': isScrolled }"
    ></div>

    <!-- Content -->
    <div
      class="relative container-custom flex items-center justify-between h-20"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2 font-bold text-xl transition-smooth hover:text-purple-400"
      >
        <span
          class="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          dev.io
        </span>
      </router-link>

      <!-- Nav Links - Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <router-link
          to="/"
          class="text-slate-300 hover:text-white transition-smooth hover:text-purple-400"
          active-class="text-white"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="text-slate-300 hover:text-white transition-smooth hover:text-purple-400"
          active-class="text-white"
        >
          Work
        </router-link>
        <router-link
          to="/blog"
          class="text-slate-300 hover:text-white transition-smooth hover:text-purple-400"
          active-class="text-white"
        >
          Blog
        </router-link>
        <router-link
          to="/about"
          class="text-slate-300 hover:text-white transition-smooth hover:text-purple-400"
          active-class="text-white"
        >
          Contact
        </router-link>
      </div>

      <!-- Hire Me Button -->
      <div class="flex items-center gap-4">
        <router-link to="/about" class="btn btn-accent hidden md:inline-block">
          Hire Me
        </router-link>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            class="w-6 h-0.5 bg-white transition-transform"
            :class="{ 'rotate-45 translate-y-2': mobileMenuOpen }"
          ></span>
          <span
            class="w-6 h-0.5 bg-white transition-opacity"
            :class="{ 'opacity-0': mobileMenuOpen }"
          ></span>
          <span
            class="w-6 h-0.5 bg-white transition-transform"
            :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen }"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
    >
      <div class="container-custom py-4 flex flex-col gap-4">
        <router-link
          to="/"
          class="text-slate-300 hover:text-white transition-smooth py-2"
          @click="closeMobileMenu"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="text-slate-300 hover:text-white transition-smooth py-2"
          @click="closeMobileMenu"
        >
          Work
        </router-link>
        <router-link
          to="/blog"
          class="text-slate-300 hover:text-white transition-smooth py-2"
          @click="closeMobileMenu"
        >
          Blog
        </router-link>
        <router-link
          to="/about"
          class="text-slate-300 hover:text-white transition-smooth py-2"
          @click="closeMobileMenu"
        >
          Contact
        </router-link>
        <router-link
          to="/about"
          class="btn btn-accent inline-block"
          @click="closeMobileMenu"
        >
          Hire Me
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
