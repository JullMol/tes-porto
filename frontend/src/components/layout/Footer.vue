<template>
  <footer class="border-t border-slate-800 bg-slate-950">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3
            class="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
          >
            dev.io
          </h3>
          <p class="text-slate-400 text-sm">
            Crafting beautiful digital experiences with modern technologies.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>
              <router-link
                to="/"
                class="hover:text-purple-400 transition-smooth"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="hover:text-purple-400 transition-smooth"
              >
                Work
              </router-link>
            </li>
            <li>
              <router-link
                to="/blog"
                class="hover:text-purple-400 transition-smooth"
              >
                Blog
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="hover:text-purple-400 transition-smooth"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Connect</h4>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth"
            >
              <span class="text-lg">f</span>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth"
            >
              <span class="text-lg">in</span>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth"
            >
              <span class="text-lg">@</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800 pt-8">
        <p class="text-center text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Portfolio. Built with React &
          Tailwind.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
