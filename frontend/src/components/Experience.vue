<script setup lang="ts">
import { computed, ref } from 'vue'
import type {
  Experience,
  ExperienceCategory,
} from '@/types/experience'

const props = defineProps<{
  experiences: Experience[]
  loading: boolean
  error: string | null
}>()

const categories = [
  'All',
  'Work',
  'Internship',
  'Education',
] as const

const selected = ref<'All' | ExperienceCategory>('All')
const filteredExperiences = computed(() =>
  props.experiences.filter((experience) => {
    if (selected.value === 'All') {
      return categories.some(
        (category) =>
          category !== 'All' &&
          category === experience.category
      )
    }
    return experience.category === selected.value
  })
)

function formatDate(date: string | null) {
  if (!date) return 'Date not specified'
  return new Date(`${date.slice(0, 10)}T00:00:00`)
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
}

function formatExperiencePeriod(item: Experience): string {
  const start = item.start_date
    ? formatDate(item.start_date)
    : item.start_year?.toString() ?? 'Date not specified'
  if (item.is_current) {
    return `${start} – Present`
  }
  const end = item.end_date
    ? formatDate(item.end_date)
    : item.end_year?.toString() ?? null
  if (!end || start === end) {
    return start
  }
  return `${start} – ${end}`
}
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
