
import { ref, onMounted } from 'vue'
import { getExperiences } from '@/services/api'
import type { Experience } from '@/types/experience'

export function useExperiences() {
  const experiences = ref<Experience[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function loadExperiences() {
    loading.value = true
    error.value = null

    try {
      experiences.value = await getExperiences()
    } catch (err) {
      error.value = err instanceof Error
        ? err.message
        : 'Unable to load experiences'
    } finally {
      loading.value = false
    }
  }

  onMounted(loadExperiences)

  return {
    experiences,
    loading,
    error,
    loadExperiences,
  }
}
