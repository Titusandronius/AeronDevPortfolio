
<script setup lang="ts">
import { computed, toRef, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'

import { useProjectDetails } from '@/composables/useProjectDetails'
import { useProjectGallery } from '@/composables/useProjectGallery'

const props = defineProps<{
  slug: string
}>()

const slug = toRef(props, 'slug')
const { project, loading, error } = useProjectDetails(slug)

const screenshots = computed(() => project.value?.screenshots ?? [])
const {
  activeImage,
  imageCount,
  imagePosition,
  imageCaption,
  openGallery,
  closeGallery,
  nextImage,
  previousImage,
} = useProjectGallery(screenshots)
function handleKeydown(event: KeyboardEvent) {
  if (!activeImage.value) return

  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') previousImage()
}

watch(activeImage, (image) => {
  document.body.style.overflow = image ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <main class="project-details-page">
    <div class="project-details-container">
      <RouterLink
        :to="{ path: '/' , hash: '#projects' }"
        class="project-back"
      >
        ← Back to Projects
      </RouterLink>
      <div v-if="loading" class="details-message">
        Loading project details...
      </div>
      <div v-else-if="error" class="details-message">
        {{ error }}
      </div>
      <template v-else-if="project">
        <header class="details-header">
          <div class="details-meta">
            <span>{{ project.category || 'Project' }}</span>
            <span v-if="project.year">{{ project.year }}</span>
          </div>
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <div class="details-actions">
            <a
              v-if="project.github_url"
              :href="project.github_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
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
        </header>
        <div class="details-cover">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
          />
          <div v-else class="details-placeholder">
            {{ project.title }}
          </div>
        </div>
        <section
          v-if="project.long_description"
          class="details-section"
        >
          <h2>Project Overview</h2>
          <p>{{ project.long_description }}</p>
        </section>
        <section
          v-if="project.features?.length"
          class="details-section"
        >
          <h2>Key Features</h2>
          <ul class="details-features">
            <li
              v-for="(feature, index) in project.features"
              :key="index"
            >
              {{ feature }}
            </li>
          </ul>
        </section>
        <section
          v-if="project.technologies?.length"
          class="details-section"
        >
          <h2>Technologies Used</h2>
          <div class="details-technologies">
            <span
              v-for="technology in project.technologies"
              :key="technology"
            >
              {{ technology }}
            </span>
          </div>
        </section>
        <section
          v-if="project.screenshots?.length"
          class="details-section"
        >
          <h2>Project Screenshots</h2>
          <div class="details-screenshots">
            <button
              v-for="(screenshot, index) in project.screenshots"
              :key="index"
              type="button"
              class="screenshot-button"
              @click="openGallery(index)"
            >
              <img
                :src="screenshot"
                :alt="`${project.title} screenshot ${index + 1}`"
                loading="lazy"
              />
            </button>
          </div>
        </section>
      </template>
    </div>
    <Teleport to="body">
      <div
        v-if="activeImage"
        class="gallery-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Project screenshot preview"
        @click.self="closeGallery"
      >
        <button
          type="button"
          class="gallery-close"
          aria-label="Close gallery"
          @click="closeGallery"
        >
          ×
        </button>

        <button
          type="button"
          class="gallery-prev"
          aria-label="Previous screenshot"
          @click="previousImage"
        >
          &#10094;
        </button>

        <img
          :src="activeImage"
          alt="Enlarged project screenshot"
          class="gallery-image"
        />
        <div class="gallery-caption">
          <h3>{{ imageCaption }}</h3>
          <p>{{ project?.title }}</p>
          <p>Screenshot {{ imagePosition }} of {{ imageCount }}</p>
        </div>
        <button
          type="button"
          class="gallery-next"
          aria-label="Next screenshot"
          @click="nextImage"
        >
          &#10095;
        </button>
      </div>
    </Teleport>
  </main>
</template>
<style scoped src="@/assets/project-details.css"></style>
