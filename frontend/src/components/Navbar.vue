<script setup lang="ts">
const links = [
    {name: 'Home',href: '#home'},
    {name: 'About',href: '#about'},
    {name: 'Skills',href: '#skills'},
    {name: 'Experience',href: '#experience'},
    {name: 'Projects',href: '#projects'},
    {name: 'Certificates',href: '#certificates'},
    {name: 'Resume',href: '#resume'},
    {name: 'Contact',href: '#contact'},
]
</script>
<template>
  <nav class="fixed top-0 left-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <!-- Logo -->
      <a
        href="#home"
        class="text-xl font-bold tracking-wide text-white transition hover:text-blue-400"
      >
        Aaron<span class="text-blue-500">.</span>
      </a>
      <!-- Navigation -->
      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          class="text-sm text-slate-300 transition hover:text-blue-400"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
      >
        Menu
      </button>
    </div>
  </nav>
</template>