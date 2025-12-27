<template>
  <div class="bg-gradient-dark min-h-screen">
    <!-- Header -->
    <section class="py-20 border-b border-slate-800">
      <div class="container-custom">
        <h1 class="section-title text-5xl md:text-6xl mb-4">
          Let's work together.
        </h1>
        <p class="section-subtitle text-lg max-w-2xl">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to get
          in touch!
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl font-bold text-white mb-8">Get In Touch</h2>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-purple-400 text-lg"
                >
                  ✉️
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    class="text-slate-400 hover:text-purple-400 transition-smooth"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-purple-400 text-lg"
                >
                  📍
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Location</h3>
                  <p class="text-slate-400">San Francisco, CA</p>
                </div>
              </div>

              <!-- Availability -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400 text-lg"
                >
                  🟢
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Availability</h3>
                  <p class="text-slate-400">
                    Open for freelance and full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-12">
              <h3 class="text-white font-semibold mb-4">Follow Me</h3>
              <div class="flex gap-4">
                <a
                  href="#"
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth text-lg"
                >
                  f
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth text-lg"
                >
                  in
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-smooth text-lg"
                >
                  ★
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="card-glass p-8">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label class="block text-white font-semibold mb-2"
                    >Name</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-smooth"
                  />
                </div>

                <div>
                  <label class="block text-white font-semibold mb-2"
                    >Email</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-smooth"
                  />
                </div>

                <div>
                  <label class="block text-white font-semibold mb-2"
                    >Message</label
                  >
                  <textarea
                    v-model="form.message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-smooth resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full btn btn-accent py-3 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span>🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 border-t border-slate-800">
      <div class="container-custom">
        <h2 class="section-title text-4xl md:text-5xl mb-12">
          Technical Arsenal
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="skill in skills"
            :key="skill"
            class="card-glass p-4 text-center hover:border-purple-500/50 transition-smooth"
          >
            <p class="text-slate-300 font-semibold">{{ skill }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const skills = [
  "Vue.js",
  "React",
  "Node.js",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Figma",
];

const submitForm = async () => {
  console.log("Form submitted:", form.value);
  // Add your form submission logic here
  alert("Message sent! I'll get back to you soon.");
  form.value = { name: "", email: "", message: "" };
};
</script>
