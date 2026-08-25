```vue
<script setup lang="ts">
import type { Profile } from '@/types/profile'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-label">
            {{ profile.title }}
        </p>
        <h1>
          Hi, I'm
          <span>{{ profile.name }}</span>
        </h1>
        <h2>
          {{ profile.title }}
        </h2>
        <p class="hero-bio">
          {{ profile.bio }}
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn-primary">
            View My Projects
          </a>
          <a href="#contact" class="btn-secondary">
            Contact Me
          </a>
        </div>
        <div class="hero-info">
          <div v-if="profile.address">
            <small>Based in</small>
            <p>{{ profile.address }}</p>
          </div>
          <div v-if="profile.email">
            <small>Email</small>
            <p>{{ profile.email }}</p>
          </div>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="hero-ring hero-ring-one"></div>
        <div class="hero-ring hero-ring-two"></div>
        <div class="hero-image">
          <img
            v-if="profile.profile_image"
            :src="profile.profile_image"
            :alt="profile.name"
          >
          <span v-else>
            {{ profile.name.charAt(0) }}
          </span>
        </div>
      </div>
    </div>
    <a href="#about" class="scroll-indicator">
      <span>Scroll</span>
      <span>↓</span>
    </a>
  </section>
</template>

<style src="@/assets/hero.css"></style>