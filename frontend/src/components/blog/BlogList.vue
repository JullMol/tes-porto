<template>
  <div class="blog-list">
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :excerpt="blog.excerpt"
      :date="blog.date"
    />
  </div>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";

defineProps({
  blogs: Array,
});
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
}
</style>
