
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { getProjectBySlug } from '@/services/api'
import type { Project } from '@/types/project'

export function useProjectDetails(slug: Ref<string>) {
  const project = ref<Project | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)
  watch(
    slug,
    async (newSlug, _oldSlug, onCleanup) => {
      let cancelled = false
      onCleanup(() => {
        cancelled = true
      })
      loading.value = true
      error.value = null
      project.value = null
      try {
        const result = await getProjectBySlug(newSlug)
        if (!cancelled) {
          project.value = result
        }
      } catch (err) {
        if (!cancelled) {
          error.value = err instanceof Error
            ? err.message
            : 'Unable to load project'
        }
      } finally {
        if (!cancelled) {
          loading.value = false
        }
      }
    },
    { immediate: true }
  )

  return {
    project,
    loading,
    error,
  }
}
