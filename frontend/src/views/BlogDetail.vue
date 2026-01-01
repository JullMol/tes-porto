<template>
  <div class="blog-detail">
    <article class="blog-post-full">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span class="date">{{ formatDate(post.created_at) }}</span>
      </div>
      <div class="post-content" v-html="post.content"></div>
    </article>
    <router-link to="/blog" class="back-link">← Back to Blog</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref({
  id: route.params.id,
  title: "Sample Blog Post",
  content: "<p>This is a sample blog post content.</p>",
  created_at: "2025-01-01",
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
</script>

<style scoped>
.blog-detail {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
}

.blog-post-full h1 {
  color: #333;
  margin-bottom: 20px;
}

.post-meta {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 30px;
}

.post-content {
  line-height: 1.8;
  color: #333;
}

.back-link {
  display: inline-block;
  margin-top: 40px;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}
</style>