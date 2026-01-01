<template>
  <section class="relative pt-32 pb-20 px-4 min-h-screen overflow-hidden flex items-center">
    <!-- FLOATING GRADIENT BACKGROUND -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="blob blob-purple"></div>
      <div class="blob blob-indigo"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        <!-- LEFT: BIO & INFO -->
        <div
          v-motion
          :initial="motion({ opacity: 0, x: -50 })"
          :enter="motion({ opacity: 1, x: 0 })"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="lg:col-span-7"
        >
          <!-- HEADER / NAME -->
          <div class="mb-10 relative">
             <div class="absolute -left-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
             
             <h2 class="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
               About Me
             </h2>
             <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
               Dimas Rafi <br>
               <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white animate-gradient">
                 Izzulhaq
               </span>
             </h1>
          </div>

          <!-- BIOGRAPHY -->
          <div class="prose prose-lg prose-invert text-slate-300 mb-12 leading-relaxed opacity-90">
            <p class="mb-6">
              As a Data Science undergraduate at <strong class="text-white">State University of Surabaya</strong> who has built a diverse portfolio of 14+ projects spanning machine learning engineering, full-stack development, and business intelligence. I transforms complex problems into production-ready solutions that drive real-world impact.
            </p>
            <p class="mb-6">
              My technical versatility spans the full development stack: Python-based ML pipelines with modern frameworks (PyTorch, Scikit-learn, NLP), containerized environments (Docker), full-stack web applications (React.js, Flask, PostgreSQL), and interactive business intelligence dashboards (Power BI, Streamlit). Whether architecting knowledge management platforms with bidirectional linking, implementing conversational AI systems, or analyzing food security patterns for policy insights, he approaches every project with analytical rigor honed through <strong class="text-white">7 gold medals in national science competitions</strong>.
            </p>
            <p class="mb-6">
              Beyond individual technical work, Dimas leads at scale coordinating national data science competitions with 300+ participants while serving as <span class="text-purple-300 font-semibold">Executive Board Member</span> of the Data Science Student Association, where he mentors 70+ students in Python programming and data analysis. This combination of hands-on development and leadership experience has strengthened both his technical depth and ability to communicate complex concepts effectively.
            </p>
            <p>
              What drives Dimas isn't just building impressive systems it's ensuring they create measurable impact. Whether developing analytics dashboards that improve production efficiency, segmentation models that guide resource allocation, or natural innovations that offer eco-friendly alternatives, he seeks opportunities where data science intersects with social good. His unique blend of competitive problem-solving excellence, production-grade technical skills, and proven leadership positions him to tackle challenges that require both analytical depth and the ability to execute complex projects from concept to deployment.
            </p>
          </div>

          <!-- CONTACT DETAILS GRID -->
          <div class="grid sm:grid-cols-2 gap-y-8 gap-x-4">
             <!-- Location -->
             <div class="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div class="info-icon group-hover:scale-110 transition-transform">
                   <MapPin class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                   <p class="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Location</p>
                   <p class="text-white font-medium">Surabaya, East Java</p>
                </div>
             </div>

             <!-- Email -->
             <a href="mailto:dimasizzulhaq35@gmail.com" class="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                <div class="info-icon group-hover:scale-110 transition-transform">
                   <Mail class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                   <p class="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Email</p>
                   <p class="text-white font-medium truncate">dimasizzulhaq35@gmail.com</p>
                </div>
             </a>

             <!-- Phone -->
             <a href="https://wa.me/6281252039711" class="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                <div class="info-icon group-hover:scale-110 transition-transform">
                   <Phone class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                   <p class="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Phone / WhatsApp</p>
                   <p class="text-white font-medium">+62 812 5203 9711</p>
                </div>
             </a>

             <!-- LinkedIn -->
             <a href="https://www.linkedin.com/in/dimas-rafi-izzulhaq-b94058378" target="_blank" class="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                <div class="info-icon group-hover:scale-110 transition-transform">
                   <Linkedin class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                   <p class="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">LinkedIn</p>
                   <p class="text-white font-medium">in/dimasrafi</p>
                </div>
             </a>
          </div>
        </div>

        <!-- RIGHT: FORM -->
        <div
          v-motion
          :initial="motion({ opacity: 0, y: 60 })"
          :enter="motion({ opacity: 1, y: 0 })"
          :transition="{ duration: 0.8, delay: 0.2, ease: 'easeOut' }"
          class="lg:col-span-5 relative"
        >
          <!-- Backdrop Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/5 rounded-3xl blur-2xl -z-10 transform rotate-2 scale-105 opacity-60"></div>

          <div class="
            relative
            bg-[#13131a]/80
            backdrop-blur-xl border border-white/10
            p-8 md:p-10 rounded-3xl
            shadow-2xl shadow-black/50
          ">
            <h3 class="text-2xl font-bold mb-2">Send a Message</h3>
            <p class="text-slate-400 mb-8 text-sm">
               Got a project in mind or just want to discuss data science? I'm all ears.
            </p>

            <form class="space-y-5" @submit.prevent="handleSubmit">
              <!-- Name Field -->
              <div class="space-y-1.5 group">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-400 transition-colors">
                  Full Name
                </label>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    v-model="formData.name"
                    required
                    class="input-modern peer"
                  />
                  <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-1.5 group">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-400 transition-colors">
                  Email Address
                </label>
                <div class="relative">
                  <input
                    type="email"
                    placeholder="john@example.com"
                    v-model="formData.email"
                    required
                    class="input-modern peer"
                  />
                  <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>

              <!-- Message Field -->
              <div class="space-y-1.5 group">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-400 transition-colors">
                  Your Message
                </label>
                <div class="relative">
                  <textarea
                    placeholder="Hi Dimas, I would like to discuss..."
                    v-model="formData.message"
                    required
                    class="input-modern peer min-h-[140px] resize-none py-4 leading-relaxed"
                  ></textarea>
                  <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>

              <!-- SUBMIT -->
              <button
                class="submit-btn-modern group mt-4 overflow-hidden relative"
                :disabled="isLoading"
              >
                <span class="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-1">
                  <span v-if="!isLoading && !isSuccess">Send Message</span>
                  <span v-if="isLoading">Sending...</span>
                  <span v-if="isSuccess">Sent successfully</span>
                  <Send v-if="!isLoading && !isSuccess" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                
                <!-- Button Hover Glow -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-100 transition-opacity group-hover:opacity-90"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay"></div>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, MapPin, Send, Linkedin, Phone } from 'lucide-vue-next'
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const isMobile = window.innerWidth < 768
const motion = (v) => (isMobile ? {} : v)

const isLoading = ref(false)
const isSuccess = ref(false)
const form = ref(null)

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  if (isLoading.value) return
  isLoading.value = true
  isSuccess.value = false

  try {
    // -------------------------------------------------------------
    // REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL EMAILJS KEYS
    // -------------------------------------------------------------
    const SERVICE_ID = 'service_ojkamrn'
    const TEMPLATE_ID = 'template_phu8gbg'
    const PUBLIC_KEY = '47wZHZryNFur5D9CK'

    // We create a temporary form data object to match template params
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }
    
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    
    // Reset form on success
    formData.name = ''
    formData.email = ''
    formData.message = ''

    setTimeout(() => {
      isSuccess.value = false
    }, 4000)

  } catch (error) {
    console.error('FAILED...', error)
    if (error.text) {
        console.error('Error Text:', error.text) // Specific EmailJS error
    }
    alert(`Failed to send message. Error: ${error.text || error.message || 'Unknown error'}`)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* BACKGROUND BLOBS */
.blob {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 9999px;
  filter: blur(140px);
  opacity: 0.25;
  animation: float 20s ease-in-out infinite;
}

.blob-purple {
  background: #a855f7;
  top: -10%;
  left: -10%;
}

.blob-indigo {
  background: #4f46e5;
  bottom: -10%;
  right: -10%;
  animation-delay: -5s;
}

@keyframes float {
  0%,100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
}

/* MODERN INPUT */
.input-modern {
  width: 100%;
  height: 52px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 0.75rem;
  padding: 0 1rem;
  font-size: 0.95rem;
  color: white;
  transition: all 0.3s ease;
  outline: none;
}

.input-modern:focus {
  background: rgba(255,255,255,0.06);
  border-color: rgba(168,85,247,0.4);
}

.input-modern::placeholder {
  color: rgba(255,255,255,0.25);
}

/* ICON BOX */
.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(168,85,247,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(168,85,247,0.2);
}

/* SUBMIT BUTTON */
.submit-btn-modern {
  width: 100%;
  height: 54px;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.submit-btn-modern:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  filter: grayscale(0.5);
}
</style>