<template>
  <div v-if="showFilters" class="mb-12 relative group/filters">
    <div class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10 pointer-events-none md:hidden" />
    <div class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10 pointer-events-none md:hidden" />

    <div class="flex overflow-x-auto pb-4 gap-3 no-scrollbar mask-gradient">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="activeTag = tag"
        class="
          whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
          border border-transparent
        "
        :class="activeTag === tag
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
          : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'"
      >
        {{ tag }}
      </button>
    </div>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ProjectCardWork
      v-for="(project, index) in filteredProjects"
      :key="project.title"
      :project="project"
      :delay="index * 0.08"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import ProjectCardWork from "./ProjectCardWork.vue"

const props = defineProps({
  projects: {
    type: Array,
    default: null
  },
  limit: {
    type: Number,
    default: null
  },
  showFilters: {
    type: Boolean,
    default: true
  }
})

const activeTag = ref("All")

const internalProjects = [
{
    title: 'Nebula - Distributed Serverless Platform',
    slug: 'nebula',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    tags: ['Go', 'gRPC', 'Docker', 'Redis', 'PostgreSQL', 'Prometheus', 'Grafana', 'Microservices'],
    description:
      'A lightweight, distributed serverless platform that executes Python and Node.js code in isolated Docker containers with automatic load balancing, real-time monitoring, and gRPC-based microservices architecture.',
    demo: 'https://drive.google.com/file/d/1ugeKVyZrPLaF5z-E72AXbQxIUsvwcAoz/preview',
    github: 'https://github.com/JullMol/nebula'
  },
  {
    title: 'Aether-Chain - Distributed Data Availability Layer',
    slug: 'aether-chain',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800',
    tags: ['Go', 'libp2p', 'gRPC', 'WebSocket', 'WebAssembly', 'React', 'Docker', 'Blockchain', 'Distributed Systems'],
    description:
      'High-performance distributed ledger combining LSM-Tree storage with blockchain immutability and P2P networking. Features React dashboard with real-time WebSocket updates and WebAssembly smart contracts.',
    demo: '#',
    github: 'https://github.com/JullMol/aether-chain'
  },
{
    title: 'Titan Ledger - Distributed Ledger System',
    slug: 'titan-ledger',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    tags: ['Go', 'PostgreSQL', 'Hexagonal Architecture', 'Docker', 'Backend', 'Fiber', 'Distributed Systems'],
    description:
      'Production-ready digital wallet and transaction system with atomic transfers, double-entry bookkeeping, idempotency guarantees, and interactive API playground for real-time testing.',
    demo: 'https://titan-ledger-production.up.railway.app/',
    video: 'https://drive.google.com/file/d/10SgKvQvFlqQ4tRja4M_64prnaKz86Ld3/preview',
    github: 'https://github.com/JullMol/titan-ledger'
  },
{
    title: 'Pharmora - Intelligent Drug Information System',
    slug: 'pharmora',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    tags: ['Python', 'Data Structure and Algorithm', 'Searching and Sorting Algorithm', 'Healthcare', 'AI Chatbot'],
    description:
      'AI-powered drug information and recommendation system that leverages natural language processing to help users explore pharmaceutical data efficiently and accurately, improving access to reliable medical insights.',
    demo: '#',
    github: 'https://github.com/JullMol/Pharmora.git'
  },
    {
    title: 'PSD Program Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    tags: ['Digital Signal Processing', 'Machine Learning', 'Classification', 'Deep Learning', 'Data Visualization', 'Python'],
    description:
      'Specialized analytics platform for Data Science program metrics with automated data pipelines, supporting data-driven curriculum improvement and student success initiatives.',
    demo: '#',
    github: '#'
  },
  {
    title: 'AI Stroke Detection',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    tags: ['Deep Learning', 'Medical AI', 'TensorFlow', 'Computer Vision', 'PCA', 'Python'],
    description:
      'Deep learning model for automated stroke detection using CT brain scans, achieving high accuracy to support medical professionals in critical diagnostic decisions during emergency situations.',
    demo: 'https://artifical-intelligence-project.streamlit.app/',
    github: 'https://github.com/JullMol/Artifical-Intelligence-Project.git'
  },
  {
    title: 'Food Security Segmentation System',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800',
    tags: ['K-Means', 'Unsupervised Learning', 'Python', 'Data Integration', 'Policy Analytics', 'Python'],
    description:
      'Multi-source data analysis platform using K-Means clustering to segment Indonesian provinces by food security indicators, providing actionable insights for evidence-based policy development.',
    demo: '#',
    github: 'https://github.com/JullMol/K-Means-Clustering.git'
  },
  {
    title: 'Statistical Inference Analysis Platform',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800',
    tags: ['Statistics', 'Hypothesis Testing', 'ANOVA', 'Regression', 'Python'],
    description:
      'Statistical analysis framework implementing hypothesis testing, confidence intervals, and regression analysis with comprehensive visualization for reproducible research methodology.',
    demo: 'https://statin-dashboard.streamlit.app/',
    github: 'https://github.com/JullMol/Statistical-Inference-Project.git'
  },
  {
    title: 'Gizmo Notes - AI Knowledge Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloud', 'Collaborative', 'Knowledge Management'],
    description:
      'Cloud-based note-taking platform with AI assistant for automated summarization and quiz generation, featuring bidirectional linking and collaborative editing for enhanced learning experiences.',
    demo: '#',
    github: 'https://github.com/JullMol/Gizmo-Notes.git'
  },
  {
    title: 'ACOS - Docker Development Environment',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    tags: ['Docker', 'DevOps', 'MySQL', 'NGINX', 'Infrastructure'],
    description:
      'Containerized development environment eliminating dependency conflicts and ensuring consistency across teams, reducing setup time from hours to minutes with comprehensive documentation.',
    demo: '#',
    github: 'https://github.com/JullMol/Project-AKSO.git'
  },
  {
    title: 'CERAH - Contextual Weather Platform',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
    tags: ['UI/UX', 'Weather API', 'Responsive Design', 'Context-Aware', 'Figma', 'UI/UX Design'],
    description:
      'Human-centered weather application providing context-aware information for daily decision-making, featuring responsive design and high-precision prediction technology integration.',
    demo: 'https://www.figma.com/proto/8jz9mmqU1KfNwkf97xF0jY/CERAH-%E2%80%93-Weather-App-Design.?page-id=0%3A1&node-id=111-45&p=f&viewport=-130%2C486%2C0.78&t=D5px4jd3ESloe4mK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A17&show-proto-sidebar=1',
    github: '#'
  },
  {
    title: 'Movie Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
    tags: ['Business Intelligence', 'Data Visualization', 'Entertainment Analytics', 'Python', 'Streamlit', 'Machine Learning'],
    description:
      'Interactive BI dashboard analyzing box office performance, ratings, and genre trends with dynamic filtering capabilities to support entertainment industry strategic decisions.',
    demo: 'https://movie-dashboard-dims.streamlit.app/',
    github: 'https://github.com/JullMol/Movie-Analytics-Dashboard.git'
  },
  {
    title: 'PEMTEKS - Textile Industry Analytics',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
    tags: ['Machine Learning', 'Python', 'Streamlit', 'Segmentation', 'Clustering', 'Data Integration', 'Data Visualization', 'Business Intelligence'],
    description:
      'Real-time textile industry performance monitoring dashboard integrating multiple data sources for comprehensive production metrics and quality control analysis.',
    demo: 'https://dashboard-market-spy.streamlit.app/',
    github: 'https://github.com/JullMol/Dashboard-PEMTEKS.git'
  },
  {
    title: 'Database Management Dashboard',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    tags: ['Full-Stack', 'Python', 'Streamlit', 'CRUD', 'Database', 'Query Optimization', 'UI/UX'],
    description:
      'User-friendly database management interface with secure CRUD operations, democratizing database access for non-technical users without requiring SQL expertise.',
    demo: 'https://dashboard-database1.streamlit.app/',
    github: 'https://github.com/JullMol/Dashboard-Database1.git'
  }
]

const sourceProjects = computed(() => {
  return props.projects && props.projects.length
    ? props.projects
    : internalProjects
})

const tags = computed(() => [
  "All",
  ...new Set(sourceProjects.value.flatMap(p => p.tags))
])

const filteredProjects = computed(() => {
  let data =
    activeTag.value === "All"
      ? sourceProjects.value
      : sourceProjects.value.filter(p =>
          p.tags.includes(activeTag.value)
        )

  if (props.limit) {
    data = data.slice(0, props.limit)
  }

  return data
})
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>