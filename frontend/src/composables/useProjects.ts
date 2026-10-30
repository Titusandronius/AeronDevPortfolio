import { ref, onMounted } from 'vue'
import { getProjects } from '@/services/api'
import type { Project } from '@/types/project'

export function useProjects() {
  const projects = ref<Project[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  async function loadProjects() {
    loading.value = true
    error.value = null
    try {
      projects.value = await getProjects()
    } catch (err) {
      error.value = err instanceof Error
        ? err.message
        : 'Unable to load projects'
    } finally {
      loading.value = false
    }
  }
  onMounted(loadProjects)
  return {
    projects,
    loading,
    error,
    loadProjects,
  }
}
