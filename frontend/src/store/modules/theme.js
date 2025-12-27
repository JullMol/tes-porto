import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false);

  // Load theme from localStorage on initialization
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    // Check system preference
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Apply theme to document
  const applyTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark.value ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  // Watch for changes and apply theme
  watch(isDark, applyTheme, { immediate: true });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
});
