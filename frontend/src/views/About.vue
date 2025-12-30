<template>
  <section class="relative pt-32 pb-20 px-4 overflow-hidden">
    <!-- FLOATING GRADIENT BACKGROUND -->
    <div class="absolute inset-0 -z-10">
      <div class="blob blob-purple"></div>
      <div class="blob blob-pink"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT -->
        <div
          v-motion
          :initial="motion({ opacity: 0, y: 40 })"
          :enter="motion({ opacity: 1, y: 0 })"
          :transition="{ duration: 0.7 }"
        >
          <h1 class="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Let's work <br />
            <span
              class="bg-gradient-to-r from-purple-400 to-pink-500
                     bg-clip-text text-transparent animate-gradient"
            >
              together.
            </span>
          </h1>

          <p class="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you.
          </p>

          <div class="space-y-8">
            <!-- EMAIL -->
            <div
              v-motion
              :initial="motion({ opacity: 0, x: -30 })"
              :enter="motion({ opacity: 1, x: 0 })"
              :transition="{ delay: 0.2 }"
              class="flex items-center gap-6"
            >
              <div class="info-icon">
                <Mail class="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Email</h3>
                <p class="text-slate-400">hello@example.com</p>
              </div>
            </div>

            <!-- LOCATION -->
            <div
              v-motion
              :initial="motion({ opacity: 0, x: -30 })"
              :enter="motion({ opacity: 1, x: 0 })"
              :transition="{ delay: 0.35 }"
              class="flex items-center gap-6"
            >
              <div class="info-icon">
                <MapPin class="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Location</h3>
                <p class="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT / FORM -->
        <div
          v-motion
          :initial="motion({ opacity: 0, scale: 0.95 })"
          :enter="motion({ opacity: 1, scale: 1 })"
          :transition="{ delay: 0.2, duration: 0.6 }"
          class="
            bg-gradient-to-br from-white/10 to-white/5
            backdrop-blur-sm border border-white/20
            p-8 md:p-10 rounded-3xl
            hover:border-purple-500/40 transition-colors
          "
        >
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div
              v-for="(field, i) in fields"
              :key="field.label"
              v-motion
              :initial="motion({ opacity: 0, y: 30 })"
              :enter="motion({ opacity: 1, y: 0 })"
              :transition="{ delay: i * 0.12 }"
              class="space-y-2"
            >
              <label class="text-sm font-medium ml-1">{{ field.label }}</label>

              <component
                :is="field.type === 'textarea' ? 'textarea' : 'input'"
                :type="field.type !== 'textarea' ? field.type : undefined"
                :placeholder="field.placeholder"
                class="input"
                :class="field.type === 'textarea' && 'min-h-[160px] resize-none py-4'"
              />
            </div>

            <!-- SUBMIT -->
            <button
              class="submit-btn magnetic"
              :disabled="isLoading"
              @mousemove="!isMobile && magneticMove($event)"
              @mouseleave="!isMobile && magneticLeave($event)"
            >
              <span v-if="!isLoading && !isSuccess">Send Message</span>
              <span v-if="isLoading">Sending...</span>
              <span v-if="isSuccess">Sent successfully ✓</span>
              <Send v-if="!isLoading && !isSuccess" class="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, MapPin, Send } from 'lucide-vue-next'
import { ref } from 'vue'

const isMobile = window.innerWidth < 768
const motion = (v) => (isMobile ? {} : v)

const isLoading = ref(false)
const isSuccess = ref(false)

const fields = [
  { label: 'Name', type: 'text', placeholder: 'John Doe' },
  { label: 'Email', type: 'email', placeholder: 'john@example.com' },
  { label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...' }
]

const handleSubmit = async () => {
  if (isLoading.value) return
  isLoading.value = true
  isSuccess.value = false

  await new Promise(r => setTimeout(r, 1400))

  isLoading.value = false
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
}

const magneticMove = (e) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
}

const magneticLeave = (e) => {
  e.currentTarget.style.transform = 'translate(0,0)'
}
</script>

<style scoped>
/* FLOATING BACKGROUND */
.blob {
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 9999px;
  filter: blur(120px);
  opacity: 0.35;
  animation: float 18s ease-in-out infinite;
}

.blob-purple {
  background: radial-gradient(circle, #a855f7, transparent 70%);
  top: -120px;
  left: -120px;
}

.blob-pink {
  background: radial-gradient(circle, #ec4899, transparent 70%);
  bottom: -160px;
  right: -120px;
  animation-delay: 6s;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}

/* INPUT */
.input {
  width: 100%;
  height: 56px;
  border-radius: 0.75rem;
  padding: 0 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  font-size: 1.05rem;
  outline: none;
  transition: all 0.25s;
}

.input:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 2px rgba(168,85,247,0.3);
}

/* ICON */
.info-icon {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(168,85,247,0.25), rgba(168,85,247,0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(168,85,247,0.3);
}

/* BUTTON */
.submit-btn {
  width: 100%;
  height: 56px;
  border-radius: 0.75rem;
  background: #9333ea;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s, transform 0.15s;
}

.submit-btn:hover {
  background: #a855f7;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.magnetic {
  transition: transform 0.15s ease-out;
}
</style>