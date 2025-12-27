<template>
  <div class="blog-card">
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
    <small>{{ date }}</small>
  </div>
</template>

<script setup>
defineProps({
  title: String,
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
