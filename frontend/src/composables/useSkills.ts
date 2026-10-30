import {onMounted, ref } from 'vue'
import { getSkills } from '@/services/api'
import type { Skill } from '@/types/skill'

export function useSkills(){
    const skills = ref<Skill[]>([])
    const loading = ref(true)
    const error = ref('')
    async function loadSkills(){
        try {
            skills.value = await getSkills()
        } catch (err) {
            error.value = err instanceof Error
            ? err.message
            : 'Failed to load skills'
        } finally {
            loading.value = false
        }
    }
    onMounted(loadSkills)
    return {
        skills, loading, error,
    }
}