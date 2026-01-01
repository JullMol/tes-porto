<template>
  <section class="mb-16">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
      <span class="w-2 h-2 rounded-full bg-purple-500" />
      {{ title }}
    </h2>

    <div class="text-white/70 leading-relaxed space-y-3">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>