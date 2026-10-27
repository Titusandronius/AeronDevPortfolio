<script setup lang="ts">
import { useProfile } from '@/composables/useProfile'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import { useSkills } from '@/composables/useSkills'
const { profile, loading, error } = useProfile()
const { skills, loading: skillsLoading, error: skillsError } = useSkills()
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
      <About :profile="profile"/>
      <Skills v-if="!skillsLoading && !skillsError" :skills="skills"/>
      <!-- Temporary sections -->
      

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