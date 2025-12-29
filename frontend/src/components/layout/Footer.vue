<template>
  <footer
    class="
      py-8
      border-t border-white/5
      text-center
      text-slate-500
      bg-[#0b0b0f]
      text-sm
    "
  >
    © {{ year }} Portfolio. Built with Vue & Tailwind.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>