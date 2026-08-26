import {onMounted, ref} from 'vue'
import {getProfile} from '../services/api'
import type {Profile} from '../types/profile'

export function useProfile(){
    const profile = ref<Profile | null>(null)
    const loading = ref(true)
    const error = ref('')
    async function loadProfile(){
        try {
            profile.value = await getProfile()
        } catch (err) {
            error.value = err instanceof Error
            ? err.message
            : 'Failed to load profile.'
        }finally{
            loading.value = false
        }
    }
    onMounted(loadProfile)
    return{
        profile,
        loading,
        error,
    }
}