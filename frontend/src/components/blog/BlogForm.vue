<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.title" placeholder="Blog Title" required />
    <textarea
      v-model="form.content"
      placeholder="Blog Content"
      required
    ></textarea>
    <button type="submit">Save Blog</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  title: "",
  content: "",
});

const submitForm = () => {
    // Submit logic
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
