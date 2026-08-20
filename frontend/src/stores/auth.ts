import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)
  const loading = ref(true)

  async function initialize() {
    const result = await supabase.auth.getSession()

    session.value = result.data.session
    user.value = result.data.session?.user ?? null
    loading.value = false
  }

  function listenToAuthChanges() {
    supabase.auth.onAuthStateChange((_event, newSession) => {
      session.value = newSession
      user.value = newSession?.user ?? null
    })
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (!error) {
      user.value = null
      session.value = null
    }

    return { error }
  }

  return {
    user,
    session,
    loading,
    initialize,
    listenToAuthChanges,
    logout,
  }
})