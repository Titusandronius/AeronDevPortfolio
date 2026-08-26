<script setup lang="ts">
import { useProfile } from '@/composables/useProfile'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
const { profile, loading, error } = useProfile()
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <Navbar />
    <div
      v-if="loading"
      class="flex min-h-screen items-center justify-center"
    >
      Loading...
    </div>
    <div
      v-else-if="error"
      class="flex min-h-screen items-center justify-center"
    >
      {{ error }}
    </div>
    <template v-else-if="profile">
      <Hero :profile="profile" />
      <!-- Temporary sections -->
      <section id="about" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">About</h2>
      </section>

      <section id="skills" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Skills</h2>
      </section>

      <section id="experience" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Experience</h2>
      </section>

      <section id="projects" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Projects</h2>
      </section>

      <section id="certificates" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Certificates</h2>
      </section>

      <section id="resume" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Resume</h2>
      </section>

      <section id="contact" class="min-h-screen px-6 py-24">
        <h2 class="text-4xl font-bold">Contact</h2>
      </section>

    </template>

  </main>
</template>