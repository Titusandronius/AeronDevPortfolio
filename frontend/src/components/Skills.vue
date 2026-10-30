<script setup lang="ts">
import type { Skill } from '@/types/skill';
defineProps<{
  skills:Skill[]  
}>()
</script>
<template>
    <section id="skills" class="skills">
        <div class="skills-container">
            <div class="skills-heading">
                <p class="skills-label">My Skills</p>
                <h2>Technologies I Work With</h2>
                <p>
                    A collection of tecnologies and tools I use for 
                    development and problem solving
                </p>
            </div>
            <div class="skills-grid">
                <div v-for="skill in skills" :key="skill.id" class="skill-card">
                    <i :class="`devicon-${skill.icon}-plain`"
                    class="skill-icon">
                    </i>
                    <h3>{{ skill.name }}</h3>
                    <span>{{ skill.category }}</span>
                    <small>{{ skill.level }}</small>
                </div>
            </div>
        </div>
    </section>
</template>
<style src="@/assets/skills.css"></style>