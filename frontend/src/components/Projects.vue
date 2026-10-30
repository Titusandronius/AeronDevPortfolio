
<script setup lang="ts">
import { toRef } from 'vue'
import { RouterLink } from 'vue-router'
import type { Project } from '@/types/project'
import { useProjectFilters } from '@/composables/useProjectFilters'
const props = defineProps<{
  projects: Project[]
  loading: boolean
  error: string | null
}>()
const {selectedCategory,categories,filteredProjects,} = useProjectFilters(toRef(props, 'projects'))
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <div class="projects-heading">
        <span>My Work</span>
        <h2>Featured Projects</h2>
        <p>
          A collection of applications and systems I've developed.
        </p>
      </div>
      <div v-if="loading" class="projects-message">
        Loading projects...
      </div>
      <div v-else-if="error" class="projects-message">
        {{ error }}
      </div>
      <template v-else>
        <div class="projects-filters">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <div class="projects-grid">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                loading="lazy"
              />
              <div v-else class="project-placeholder">
                <span>{{ project.title }}</span>
              </div>
              <span
                v-if="project.is_featured"
                class="project-featured"
              >
                Featured
              </span>
            </div>
            <div class="project-content">
              <div class="project-meta">
                <span>{{ project.category || 'Project' }}</span>
                <span v-if="project.year">{{ project.year }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>

              <div
                v-if="project.technologies?.length"
                class="project-technologies"
              >
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                >
                  {{ technology }}
                </span>
              </div>

              <div class="project-actions">
                <RouterLink
                :to="{ name: 'project-details', params: { slug: project.slug } }"
                >
                View Details
                </RouterLink>
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  v-if="project.demo_url"
                  :href="project.demo_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
        <p
          v-if="filteredProjects.length === 0"
          class="projects-message"
        >
          No projects available in this category.
        </p>
      </template>
    </div>
  </section>
</template>
<style scoped src="@/assets/projects.css"></style>
