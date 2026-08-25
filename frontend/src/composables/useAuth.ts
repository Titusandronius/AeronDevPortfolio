import { ref } from 'vue'
import {login,register,loginWithGoogle,loginWithMicrosoft,} from '@/services/auth'
import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const authStore = useAuthStore()
  const isLogin = ref(true)
  const email = ref('')
  const password = ref('')
  const message = ref('')
  const loading = ref(false)

  async function submit() {
    message.value = ''
    loading.value = true
    const result = isLogin.value
      ? await login(email.value, password.value)
      : await register(email.value, password.value)
    loading.value = false
    if (result.error) {
      message.value = result.error.message
      return
    }
    if (isLogin.value) {
      message.value = 'Login successful.'
    } else {
      message.value = 'Registration successful. You can now log in.'
      isLogin.value = true
    }
  }

  async function logout() {
    await authStore.logout()
  }

  return {
    authStore,
    isLogin,
    email,
    password,
    message,
    loading,
    submit,
    logout,
    loginWithGoogle,
    loginWithMicrosoft,
  }
}

