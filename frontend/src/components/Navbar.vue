<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="logo">
        Aaron<span>.</span>
      </RouterLink>
      <div class="nav-links">
        <template v-for="link in links" :key="link.name">
          <RouterLink
            v-if="link.href === '/'"
            :to="link.href"
            class="nav-link"
          >
            {{ link.name }}
          </RouterLink>
          <a
            v-else
            :href="link.href"
            class="nav-link"
          >
            {{ link.name }}
          </a>
        </template>
      </div>
      <button type="button" class="menu-button">
        Menu
      </button>
    </div>
  </nav>
</template>
<style src="@/assets/navbar.css"></style>

