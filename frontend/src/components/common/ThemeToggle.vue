<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'theme-toggle--dark': isDark }"
    aria-label="Toggle theme"
  >
    <div class="theme-toggle__container">
      <div class="theme-toggle__sun">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
          />
        </svg>
      </div>
      <div class="theme-toggle__moon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="theme-toggle__toggle"></div>
    </div>
  </button>
</template>

<script setup>
import { useThemeStore } from "../../store/modules/theme";

const { isDark, toggleTheme } = useThemeStore();
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-toggle__container {
  position: relative;
  width: 60px;
  height: 30px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 5px;
  transition: all 0.3s ease;
}

.theme-toggle--dark .theme-toggle__container {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

.theme-toggle__sun,
.theme-toggle__moon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
}

.theme-toggle__sun {
  color: #ffd700;
  opacity: 1;
  transform: scale(1);
}

.theme-toggle--dark .theme-toggle__sun {
  opacity: 0;
  transform: scale(0.5);
}

.theme-toggle__moon {
  color: #c0c0c0;
  opacity: 0;
  transform: scale(0.5);
}

.theme-toggle--dark .theme-toggle__moon {
  opacity: 1;
  transform: scale(1);
}

.theme-toggle__toggle {
  position: absolute;
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  left: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  z-index: 1;
}

.theme-toggle--dark .theme-toggle__toggle {
  left: 34px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.4);
}

.theme-toggle__toggle::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0.6;
}

/* 3D hover effect */
.theme-toggle:hover .theme-toggle__container {
  transform: perspective(100px) rotateX(5deg);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.theme-toggle--dark:hover .theme-toggle__container {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
</style>
