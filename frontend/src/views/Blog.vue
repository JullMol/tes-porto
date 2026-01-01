<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="blog-posts">
      <BlogPost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import BlogPost from "../components/blog/BlogPost.vue";

const posts = [
  {
    id: 1,
    title: "Getting Started with Vue.js",
    excerpt: "Learn the basics of Vue.js development",
    published: true,
    created_at: "2025-01-01",
  },
];
</script>

<style scoped>
.blog {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
}

.blog h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>