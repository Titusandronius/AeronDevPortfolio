
<script setup lang="ts">
import { useHome } from '@/composables/useHome'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
const {profile,loading,error,skills,skillsLoading,skillsError,experiences,experiencesLoading,experiencesError,
projects,projectsLoading,projectsError,} = useHome()
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <Navbar />
    <div v-if="loading"class="flex min-h-screen items-center justify-center">
      Loading...
    </div>
    <div v-else-if="error" class="flex min-h-screen items-center justify-center">
      {{ error }}
    </div>
    <template v-else-if="profile">
      <Hero :profile="profile" />
      <About :profile="profile" />
      <Skills v-if="!skillsLoading && !skillsError" :skills="skills"/>
      <Experience :experiences="experiences":loading="experiencesLoading" :error="experiencesError"/>
      <Projects :projects="projects" :loading="projectsLoading":error="projectsError"/>
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
