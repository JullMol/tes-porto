<template>
  <div
    class="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-purple-500/40 transition"
  >
    <h3 class="font-semibold mb-2">{{ post.title }}</h3>
    <p class="text-sm text-slate-400 line-clamp-3">
      {{ post.excerpt }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
  excerpt: String,
  date: String,
});
</script>

<style scoped>
.blog-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>
