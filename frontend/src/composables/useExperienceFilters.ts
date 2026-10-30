
import { computed, ref, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type {
  Experience,
  ExperienceCategory,
} from '@/types/experience'

export function useExperienceFilters(
  experiences: MaybeRefOrGetter<Experience[]>
) {
  const categories = [
    'All',
    'Work',
    'Internship',
    'Education',
  ] as const
  const selected = ref<'All' | ExperienceCategory>('All')
  const filteredExperiences = computed(() => {
    const items = toValue(experiences)
    if (selected.value === 'All') {
      return items.filter((item) =>
        categories.some(
          (category) =>
            category !== 'All' &&
            category === item.category
        )
      )
    }
    return items.filter(
      (item) => item.category === selected.value
    )
  })
  function formatDate(date: string | null): string {
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
  return {
    categories,
    selected,
    filteredExperiences,
    formatExperiencePeriod,
  }
}
