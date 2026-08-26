<script setup lang="ts">
import type { Profile } from '@/types/profile';

defineProps<{
    profile:Profile
}>()
</script>

<template>
    <section id="about" class="about">
        <div class="about-container">
            <div class="about-image">
                <img
                v-if="profile.profile_image"
                :src="profile.profile_image"
                :alt="profile.name">
                
                <span v-else>
                    {{ profile.name.charAt(0) }}
                </span>
            </div>
            <div class="about-content">
                <p class="about-label">About Me</p>
                <h2>{{ profile.name }}</h2>
                <h3>{{ profile.title }}</h3>
                <p class="about-bio">{{ profile.bio }}</p>
                <div class="about-details">
                    <div v-if="profile.address">
                        <span>Location</span>
                        <strong>{{ profile.address }}</strong>
                    </div>

                    <div v-if="profile.email">
                       <span>Email</span>
                       <strong>{{ profile.email }}</strong>     
                    </div>

                    <div v-if="profile.phone">
                        <span>Phone</span>
                        <strong>{{ profile.phone }}</strong>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped src="@/assets/about.css"></style>