<script setup lang="ts">
import { ref } from 'vue'
import { login, register, loginWithGoogle, loginWithMicrosoft } from '../services/auth'
import { useAuthStore } from '../stores/auth'


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
</script>
<template>
  <main class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
    <div class="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
      <template v-if="authStore.user">
        <h1 class="text-3xl font-bold text-white text-center">
          Welcome!
        </h1>

        <p class="mt-4 text-center text-slate-400">
          {{ authStore.user.email }}
        </p>

        <button
          type="button"
          class="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500"
          @click="logout"
        >
          Logout
        </button>
      </template>

      <template v-else>
        <h1 class="text-3xl font-bold text-white text-center">
          {{ isLogin ? 'Welcome Back' : 'Create Account' }}
        </h1>

        <p class="mt-2 text-center text-slate-400">
          {{ isLogin ? 'Sign in to your account' : 'Create your portfolio account' }}
        </p>

        <form class="mt-8 space-y-5" @submit.prevent="submit">
          <div>
            <label class="block mb-2 text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-slate-300">
              Password
            </label>

            <input
              v-model="password"
              type="password"
              required
              minlength="6"
              :autocomplete="isLogin ? 'current-password' : 'new-password'"
              class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
          >
            {{ loading ? 'Please wait...' : isLogin ? 'Login' : 'Register' }}
          </button>
        </form>

        <p
          v-if="message"
          class="mt-5 rounded-lg bg-slate-800 p-3 text-center text-sm text-slate-300"
        >
          {{ message }}
        </p>

        <button
          type="button"
          class="mt-6 w-full text-sm text-blue-400 hover:text-blue-300"
          @click="isLogin = !isLogin"
        >
          {{
            isLogin
              ? 'Need an account? Register'
              : 'Already have an account? Login'
          }}
        </button>
        <button
            type="button"
            class="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
            @click="loginWithGoogle"
            >
            Continue with Google
        </button>
       <button
        type="button"
        class="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
        @click="loginWithMicrosoft"
        >
        Continue with Microsoft
        </button>
      </template>
    </div>
  </main>
</template>