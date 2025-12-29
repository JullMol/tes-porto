<template>
  <router-link
    :to="to"
    class="relative text-sm font-medium transition-colors"
    :class="
      isActive
        ? 'text-white'
        : 'text-slate-400 hover:text-white'
    "
    @click="$emit('click')"
  >
    {{ label }}
    <span
      v-if="isActive"
      class="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
    />
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  to: String,
  label: String,
});

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>