import { supabase } from '../lib/supabase'

export async function register(email: string, password: string) {
  return await supabase.auth.signUp({
    email,
    password,
  })
}

export async function login(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export async function logout() {
  return await supabase.auth.signOut()
}

export async function getSession() {
  return await supabase.auth.getSession()
}