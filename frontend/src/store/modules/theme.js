import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false);

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const applyTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark.value ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  watch(isDark, applyTheme, { immediate: true });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
});
