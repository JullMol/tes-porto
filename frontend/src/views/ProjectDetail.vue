<template>
  <div class="project-detail">
    <div class="container">
      <div v-if="loading" class="loading">
        <LoadingSpinner />
      </div>
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
        <Button @click="fetchProject" text="Retry" />
      </div>
      <div v-else-if="project" class="project-content">
        <div class="project-header">
          <h1>{{ project.title }}</h1>
          <div class="project-meta">
            <span class="date">{{ formatDate(project.created_at) }}</span>
            <span class="category">{{ project.category }}</span>
          </div>
        </div>

        <div class="project-image">
          <img :src="project.image_url" :alt="project.title" />
        </div>

        <div class="project-description">
          <h2>Description</h2>
          <p>{{ project.description }}</p>
        </div>

        <div class="project-details">
          <div class="detail-section">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="project.github_url" class="detail-section">
            <h3>Links</h3>
            <div class="project-links">
              <a :href="project.github_url" target="_blank" class="link-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                View on GitHub
              </a>
              <a
                v-if="project.live_url"
                :href="project.live_url"
                target="_blank"
                class="link-button primary"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.83 6.977-7.07 4.125 4.172v-11z"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div class="back-button">
          <Button @click="goBack" text="← Back to Projects" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProjectStore } from "../store/modules/projects";
import Button from "../components/common/Button.vue";
import LoadingSpinner from "../components/common/LoadingSpinner.vue";

export default {
  name: "ProjectDetail",
  components: {
    Button,
    LoadingSpinner,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const projectsStore = useProjectStore();

    const project = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const fetchProject = async () => {
      try {
        loading.value = true;
        error.value = null;
        const projectId = parseInt(route.params.id);
        await projectsStore.fetchProjects();
        const foundProject = projectsStore.projects.find(
          (p) => p.id === projectId
        );
        if (foundProject) {
          project.value = foundProject;
        } else {
          error.value = "Project not found";
        }
      } catch (err) {
        error.value = "Failed to load project";
        console.error("Error fetching project:", err);
      } finally {
        loading.value = false;
      }
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const goBack = () => {
      router.push("/projects");
    };

    onMounted(() => {
      fetchProject();
    });

    return {
      project,
      loading,
      error,
      fetchProject,
      formatDate,
      goBack,
    };
  },
};
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.loading,
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: white;
}

.error p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.project-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.project-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.project-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.project-image {
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.project-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image img:hover {
  transform: scale(1.02);
}

.project-description h2,
.detail-section h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.project-description p {
  color: #34495e;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.detail-section {
  margin-bottom: 2rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.link-button {
  background: #f8f9fa;
  color: #495057;
  border: 2px solid #e9ecef;
}

.link-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.link-button.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.link-button.primary:hover {
  background: linear-gradient(135deg, #5a6fd8, #6a4190);
}

.back-button {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2rem;
  }

  .project-image img {
    height: 250px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-links {
    flex-direction: column;
  }

  .link-button {
    justify-content: center;
  }
}
</style>
