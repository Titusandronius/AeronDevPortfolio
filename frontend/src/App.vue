<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from './lib/supabase'

const status = ref('Checking Supabase...')

async function checkSupabase() {
  const { error } = await supabase.auth.getSession()

  status.value = error
    ? `Error: ${error.message}`
    : 'Supabase Auth connected successfully.'
}

checkSupabase()
</script>

<template>
  <main class="min-h-screen bg-slate-950 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white">
        AerDev Portfolio
      </h1>

      <p class="mt-4 text-slate-400">
        {{ status }}
      </p>
    </div>
  </main>
</template>