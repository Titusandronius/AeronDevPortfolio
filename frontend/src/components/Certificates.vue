
<script setup lang="ts">
import type { Certificate } from '@/types/certificate'
import '../assets/certificates.css'

defineProps<{
  certificates: Certificate[]
  loading: boolean
  error: string | null
}>()
</script>

<template>
  <section id="certificates" class="certificates-section">
    <div class="certificates-container">
      <div class="certificates-heading">
        <span class="certificates-eyebrow">CONTINUOUS LEARNING</span>
        <h2>Certificates & Achievements</h2>
        <p>
          A space dedicated to professional development,
          certifications, and learning milestones.
        </p>
      </div>
      <div v-if="loading" class="certificates-message">
        Loading certificates...
      </div>
      <div v-else-if="error" class="certificates-message certificates-error">
        {{ error }}
      </div>
      <div v-else-if="certificates.length === 0" class="certificates-empty">
        <div class="certificates-empty-icon" aria-hidden="true">✦</div>
        <h3>Learning Never Stops</h3>
        <p>
          I'm continuously developing my skills through hands-on
          projects, exploration, and learning. Certifications
          and professional achievements will be featured here
          as my journey progresses.
        </p>
        <span class="certificates-empty-label">More milestones ahead</span>
      </div>
      <div v-else class="certificates-grid">
        <article
          v-for="certificate in certificates"
          :key="certificate.id"
          class="certificate-card"
        >
          <img
            v-if="certificate.image"
            :src="certificate.image"
            :alt="certificate.title"
            class="certificate-image"
            loading="lazy"
          />
          <div class="certificate-content">
            <span v-if="certificate.category" class="certificate-category">
              {{ certificate.category }}
            </span>
            <h3>{{ certificate.title }}</h3>
            <p class="certificate-issuer">{{ certificate.issuer }}</p>
            <p v-if="certificate.description" class="certificate-description">
              {{ certificate.description }}
            </p>
            <a
              v-if="certificate.credential_url"
              :href="certificate.credential_url"
              target="_blank"
              rel="noopener noreferrer"
              class="certificate-link"
            >
              View Credential ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
