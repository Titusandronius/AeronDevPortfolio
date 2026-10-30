
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Certificates', href: '/#certificates' },
  { name: 'Resume', href: '/#resume' },
  { name: 'Contact', href: '/#contact' },
]
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function closeMenu() {
  isMenuOpen.value = false
}
function navigateToSection(href: string) {
  closeMenu()
  if (route.path === '/' && route.hash === href.substring(1)) {
    document.querySelector(href.substring(1))?.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="logo" @click="closeMenu">
        Aaron<span>.</span>
      </RouterLink>
      <div
        id="mobile-navigation"
        class="nav-links"
        :class="{ 'nav-links-open': isMenuOpen }"
      >
        <template v-for="link in links" :key="link.name">
          <RouterLink
            v-if="link.href === '/'"
            :to="link.href"
            class="nav-link"
            @click="closeMenu"
          >
            {{ link.name }}
          </RouterLink>
          <a
            v-else
            :href="link.href"
            class="nav-link"
            @click="navigateToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </template>
      </div>
      <button
        type="button"
        class="menu-button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? 'Close' : 'Menu' }}
      </button>
    </div>
  </nav>
</template>
<style src="@/assets/navbar.css"></style>
