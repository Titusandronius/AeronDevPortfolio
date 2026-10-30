
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProfile } from '@/composables/useProfile'
import { useSkills } from '@/composables/useSkills'
import { useExperiences } from '@/composables/useExperiences'
import { useProjects } from '@/composables/useProjects'

export function useHome() {
  const route = useRoute()
  const {profile,loading,error,} = useProfile()
  const {skills,loading: skillsLoading,error: skillsError,} = useSkills()
  const {experiences,loading: experiencesLoading,error: experiencesError,} = useExperiences()
  const {projects,loading: projectsLoading,error: projectsError,} = useProjects()
  watch(
    [
      () => route.hash,
      loading,
      skillsLoading,
      experiencesLoading,
      projectsLoading,
    ],
    async () => {
      if (!route.hash) return
      if (
        loading.value ||
        skillsLoading.value ||
        experiencesLoading.value ||
        projectsLoading.value
      ) {
        return
      }
      await nextTick()
      requestAnimationFrame(() => {
        const target = document.querySelector(route.hash)

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    },
    {
      immediate: true,
      flush: 'post',
    }
  )
  return {profile,loading,error,skills,skillsLoading,skillsError,experiences,experiencesLoading,
    experiencesError,projects,projectsLoading,projectsError,}
}
