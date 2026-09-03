<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const authorName = ref('Hussain Ullah') // Aap apna naam ya pharmacy ka naam rakh sakte hain
</script>

<template>
  <footer class="w-full py-4 bg-white border-t border-slate-100 text-center">
    <div class="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium tracking-wide">
      <span>Copyright</span>

      <!-- Clean Minimalist Copyright Icon -->
      <svg
        class="w-3.5 h-3.5 text-slate-400 inline-block -mt-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
      </svg>

      <span>{{ currentYear }}</span>
      <span class="text-slate-300">•</span>
      <span class="font-semibold text-slate-700">{{ authorName }}</span>
      <span class="text-slate-400">All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
/* Extra safety for clean monospace look on light themes */
footer {
  -webkit-font-smoothing: antialiased;
}
</style>
