
<script setup lang="ts">
import { toRef } from 'vue'
import type { Experience } from '@/types/experience'
import { useExperienceFilters } from '@/composables/useExperienceFilters'
const props = defineProps<{
  experiences: Experience[]
  loading: boolean
  error: string | null
}>()
const {
  categories,
  selected,
  filteredExperiences,
  formatExperiencePeriod,
} = useExperienceFilters(toRef(props, 'experiences'))
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <div class="experience-heading">
        <span>My Journey</span>
        <h2>Experience & Education</h2>
        <p>
          My professional and academic journey.
        </p>
      </div>
      <div class="experience-filters">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ active: selected === category }"
          @click="selected = category"
        >
          {{ category }}
        </button>
      </div>
      <p v-if="loading" class="experience-message">
        Loading experiences...
      </p>
      <p v-else-if="error" class="experience-message">
        {{ error }}
      </p>
      <div v-else class="experience-timeline">
        <article
          v-for="item in filteredExperiences"
          :key="item.id"
          class="experience-card"
        >
          <div class="experience-dot"></div>
          <div class="experience-card-content">
            <span class="experience-category">
              {{ item.category }}
            </span>
            <h3>{{ item.title }}</h3>
            <h4>{{ item.organization }}</h4>
            <p class="experience-date">
              {{ formatExperiencePeriod(item) }}
            </p>
            <p v-if="item.location" class="experience-location">
              {{ item.location }}
            </p>
            <p v-if="item.description" class="experience-description">
              {{ item.description }}
            </p>
            <ul v-if="item.highlights?.length">
              <li
                v-for="(highlight, index) in item.highlights"
                :key="index"
              >
                {{ highlight }}
              </li>
            </ul>
            <div
              v-if="item.technologies?.length"
              class="experience-technologies"
            >
              <span
                v-for="technology in item.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
            <a
              v-if="item.organization_url"
              :href="item.organization_url"
              target="_blank"
              rel="noopener noreferrer"
              class="experience-link"
            >
              Visit Organization
            </a>
          </div>
        </article>
        <p
          v-if="filteredExperiences.length === 0"
          class="experience-message"
        >
          No experiences available in this category.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/experience.css"></style>
