
import { computed, ref, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { Project } from '@/types/project'

export function useProjectFilters(
  projects: MaybeRefOrGetter<Project[]>
) {
  const selectedCategory = ref('All')
  const categories = computed(() => [
    'All',
    ...new Set(
      toValue(projects)
        .map(project => project.category)
        .filter(
          (category): category is string => Boolean(category)
        )
    ),
  ])
  const filteredProjects = computed(() => {
    const items = toValue(projects)
    if (selectedCategory.value === 'All') {
      return items
    }
    return items.filter(
      project => project.category === selectedCategory.value
    )
  })
  return {selectedCategory,categories,filteredProjects,}
}
