
<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
const {authStore,isLogin,email,password,message,loading,
  submit,logout,loginWithGoogle,loginWithMicrosoft,
} = useAuth()
</script>

<template>
  <main class="auth-page">
    <div class="auth-card">
      <template v-if="authStore.user">
        <h1>Welcome!</h1>
        <p class="auth-email">
          {{ authStore.user.email }}
        </p>
        <button class="btn btn-danger" @click="logout">
          Logout
        </button>
      </template>
      <template v-else>
        <h1>
          {{ isLogin ? 'Welcome Back' : 'Create Account' }}
        </h1>
        <p class="auth-subtitle">
          {{ isLogin
            ? 'Sign in to your account'
            : 'Create your portfolio account'
          }}
        </p>
        <form @submit.prevent="submit">
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="password"
              type="password"
              required
              minlength="6"
              :autocomplete="isLogin ? 'current-password' : 'new-password'"
              placeholder="••••••••"
            />
          </div>
          <button
            class="btn btn-primary"
            type="submit"
            :disabled="loading"
          >
            {{ loading
              ? 'Please wait...'
              : isLogin
                ? 'Login'
                : 'Register'
            }}
          </button>
        </form>
        <p v-if="message" class="auth-message">
          {{ message }}
        </p>
        <button
          class="switch-auth"
          @click="isLogin = !isLogin"
        >
          {{ isLogin
            ? 'Need an account? Register'
            : 'Already have an account? Login'
          }}
        </button>
        <button class="btn btn-oauth" @click="loginWithGoogle">
          Continue with Google
        </button>
        <button class="btn btn-oauth" @click="loginWithMicrosoft">
          Continue with Microsoft
        </button>
      </template>
    </div>
  </main>
</template>
<style src="@/assets/auth.css"></style>

