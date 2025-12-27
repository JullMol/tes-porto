<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.title" placeholder="Project Title" required />
    <textarea
      v-model="form.description"
      placeholder="Project Description"
      required
    ></textarea>
    <input v-model="form.githubUrl" placeholder="GitHub URL" />
    <button type="submit">Save Project</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  title: "",
  description: "",
  githubUrl: "",
});

const submitForm = () => {
  console.log("Project form submitted:", form.value);
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
