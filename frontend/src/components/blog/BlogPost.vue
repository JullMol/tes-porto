<template>
  <article class="blog-post">
    <h2>{{ post.title }}</h2>
    <p class="excerpt">{{ post.excerpt }}</p>
    <div class="post-meta">
      <span class="date">{{ formatDate(post.created_at) }}</span>
    </div>
    <router-link :to="`/blog/${post.id}`" class="read-more"
      >Read More</router-link
    >
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
</script>

<style scoped>
.blog-post {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-post h2 {
  color: #333;
  margin-bottom: 10px;
}

.excerpt {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.post-meta {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 15px;
}

.read-more {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
