<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div
      class="absolute inset-0 border-b border-white/10 backdrop-blur-xl transition"
      :class="isScrolled ? 'bg-[#0b0b0f]/95' : 'bg-[#0b0b0f]/80'"
    />

    <div
      class="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-20"
    >
      <router-link
        to="/"
        class="font-bold text-2xl tracking-tight text-white hover:text-purple-400 transition-colors"
      >
        dazz<span
          class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >.drz</span
        >
      </router-link>

      <div class="hidden md:flex items-center gap-8">
        <NavLink to="/" label="Home" />
        <NavLink to="/projects" label="Work" />
        <NavLink to="/about" label="Contact" />

        <router-link to="/about">
          <button
            class="
              ml-4 px-6 h-8 rounded-full
              text-xs font-semibold
              bg-purple-600 hover:bg-purple-500
              text-white transition
            "
          >
            Hire Me
          </button>
        </router-link>
      </div>

      <button
        @click="toggleMobileMenu"
        class="md:hidden w-9 h-9 flex items-center justify-center text-white"
      >
        ☰
      </button>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-20 left-0 right-0 bg-[#0b0b0f]/95 backdrop-blur-xl border-b border-white/10"
    >
      <div class="px-6 py-6 flex flex-col gap-4">
        <router-link to="/" @click="closeMobileMenu">Home</router-link>
        <router-link to="/projects" @click="closeMobileMenu">Work</router-link>
        <router-link to="/about" @click="closeMobileMenu">Contact</router-link>
        <router-link
          to="/about"
          class="mt-4 inline-flex justify-center rounded-full bg-purple-600 py-2 text-sm font-semibold"
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
import { useRoute } from "vue-router";
import NavLink from "./NavLink.vue";

const route = useRoute();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() =>
  window.removeEventListener("scroll", handleScroll)
);
</script>