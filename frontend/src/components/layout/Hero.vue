<template>
  <section class="relative min-h-screen bg-gradient-dark overflow-hidden flex items-center">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <!-- Content -->
    <div class="relative container-custom">
      <div class="max-w-3xl">
        <!-- Available Badge -->
        <div class="badge mb-8">
          <span class="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
          Available for work
        </div>

        <!-- Main Title -->
        <h1 class="section-title text-5xl md:text-6xl mb-6 leading-tight">
          Building digital
          <span class="gradient-text">experiences</span>
          that matter.
        </h1>

        <!-- Subtitle -->
        <p class="section-subtitle mb-8 text-lg max-w-2xl">
          I'm a Full Stack Developer passionate about crafting beautiful, high-performance web applications with modern technologies.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-4 mb-12">
          <router-link to="/projects" class="btn btn-primary">
            View My Work
          </router-link>
          <router-link to="/about" class="btn btn-secondary">
            Contact Me
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="relative py-20 bg-slate-950">
    <div class="container-custom">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card-glass p-6 text-center hover:border-purple-500/50 transition-smooth">
          <div class="text-3xl mb-2">⚡</div>
          <h3 class="text-white font-semibold">Frontend</h3>
          <p class="text-xs text-slate-400 mt-1">React, Next.js, Tailwind</p>
        </div>
        <div class="card-glass p-6 text-center hover:border-purple-500/50 transition-smooth">
          <div class="text-3xl mb-2">🔧</div>
          <h3 class="text-white font-semibold">Backend</h3>
          <p class="text-xs text-slate-400 mt-1">Node, PostgreSQL, Go</p>
        </div>
        <div class="card-glass p-6 text-center hover:border-purple-500/50 transition-smooth">
          <div class="text-3xl mb-2">🏗️</div>
          <h3 class="text-white font-semibold">Architecture</h3>
          <p class="text-xs text-slate-400 mt-1">Clean Code, Scalability</p>
        </div>
        <div class="card-glass p-6 text-center hover:border-purple-500/50 transition-smooth">
          <div class="text-3xl mb-2">🚀</div>
          <h3 class="text-white font-semibold">DevOps</h3>
          <p class="text-xs text-slate-400 mt-1">Docker, CI/CD, AWS</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="relative py-32 bg-gradient-dark">
    <div class="container-custom text-center">
      <h2 class="section-title text-4xl md:text-5xl mb-6">
        Have a project in mind?
      </h2>
      <p class="section-subtitle mb-12">
        I'm currently available for freelance work and open to full-time opportunities. Let's build something amazing together.
      </p>
      <router-link to="/about" class="btn btn-accent text-lg">
        Let's Talk
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProfileStore } from "@/store/modules/profile";

const profileStore = useProfileStore();
const profile = ref({
  name: "Your Name",
  tagline: "Full Stack Developer",
  bio: "Building amazing web applications with modern technologies",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "your.email@example.com",
});

onMounted(async () => {
  try {
    await profileStore.fetchProfile();
    if (profileStore.profile) {
      profile.value = profileStore.profile;
    }
  } catch (error) {
    console.log("Profile loading with defaults");
  }
});
</script>.hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  z-index: 1;
}

.hero-text {
  color: white;
  animation: slideInLeft 1s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(20deg) scale(1.1);
  }
  75% {
    transform: rotate(-20deg) scale(1.1);
  }
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  from {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }
  to {
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.6),
      0 0 60px rgba(102, 126, 234, 0.4);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 50%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  position: relative;
}

.gradient-text::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  animation: underline 2s ease-in-out infinite;
}

@keyframes underline {
  0%,
  100% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
}

.hero-tagline {
  font-size: 24px;
  margin-bottom: 15px;
  opacity: 0.95;
  font-weight: 500;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-bio {
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 500px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-out 0.7s both;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
}

.btn-primary:hover {
  transform: translateY(-3px) rotateX(5deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), var(--glow-primary);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: var(--blur-light);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) rotateX(5deg);
  box-shadow: var(--glow-secondary);
}

.social-links {
  display: flex;
  gap: 20px;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.social-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: var(--blur-light);
  border-radius: 12px;
  color: white;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.social-icon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.social-icon:hover::before {
  opacity: 1;
}

.social-icon:hover {
  background: white;
  color: #667eea;
  transform: translateY(-5px) rotateY(10deg) scale(1.1);
  box-shadow: var(--glow-primary);
  border-color: rgba(255, 255, 255, 0.8);
}

.social-icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.social-icon:hover svg {
  transform: scale(1.2);
}

.hero-image {
  position: relative;
  height: 500px;
  animation: slideInRight 1s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: var(--blur-light);
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 600;
  font-size: 18px;
  color: var(--primary);
  animation: floatCard 6s ease-in-out infinite;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  transform-style: preserve-3d;
}

.floating-card:hover {
  transform: translateY(-10px) rotateY(5deg) scale(1.05);
  box-shadow: var(--glow-primary);
  background: rgba(255, 255, 255, 1);
}

.tech-icon {
  font-size: 32px;
  filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
  transition: transform 0.3s ease;
}

.floating-card:hover .tech-icon {
  transform: scale(1.2) rotate(10deg);
  filter: drop-shadow(0 0 15px rgba(102, 126, 234, 0.5));
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 45%;
  right: 5%;
  animation-delay: -2s;
}

.card-3 {
  bottom: 15%;
  left: 20%;
  animation-delay: -4s;
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0px) rotateX(0deg);
  }
  25% {
    transform: translateY(-15px) rotateX(5deg);
  }
  50% {
    transform: translateY(-30px) rotateX(0deg);
  }
  75% {
    transform: translateY(-15px) rotateX(-5deg);
  }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-image {
    display: none;
  }

  .hero-actions {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
