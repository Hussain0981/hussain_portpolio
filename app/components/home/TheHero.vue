<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'
import Typed from 'typed.js'
import { onMounted, onUnmounted, ref } from 'vue'

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: '#fff',
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#000',
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
}
function onLoad(container: Container) {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}

// Keep a reference to destroy the instance on unmount
const typedInstance = ref<Typed | null>(null)

onMounted(() => {
  typedInstance.value = new Typed('#element', {
    strings: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'System Designer',
      'Database Designer',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  })
})

onUnmounted(() => {
  if (typedInstance.value) {
    typedInstance.value.destroy()
  }
})
</script>

<template>
  <section class="min-h-[80vh] text-neutral-600 py-16">
    <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
    />

    <div class="w-full grid xl:grid-cols-12 grid-flow-row gap-12 items-center">
      <!-- Left Content Column -->
      <div class="space-y-8 md:col-span-7">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200/60 text-emerald-800 py-1.5 px-3 text-xs font-mono rounded-full w-fit">
          <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Currently working Remote from Pakistan</span>
        </div>

        <!-- Name Heading -->
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-neutral-800 uppercase">
          Hussain <br>
          <span class="text-gray-500 font-medium tracking-wide">Ullah</span>
        </h1>

        <!-- Typed JS Dynamic Output -->
        <div class="text-lg sm:text-xl font-mono text-neutral-500 min-h-[32px] flex items-center">
          <span id="element" class="text-neutral-900 font-semibold" />
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center gap-6 pt-2">
          <!-- Primary CTA -->
          <button class="group relative px-8 py-4 bg-neutral-900 text-white font-bold uppercase text-xs tracking-widest rounded-full overflow-hidden shadow-sm hover:shadow-lg hover:shadow-neutral-200 hover:bg-neutral-800 transition-all duration-300">
            <span class="relative z-10">Start a Project</span>
            <div class="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <!-- Secondary CTA -->
          <button class="group flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300">
            <span class="text-xs font-bold uppercase tracking-widest">View Archives</span>
            <div class="w-8 h-px bg-neutral-300 group-hover:w-12 group-hover:bg-neutral-900 transition-all duration-300" />
          </button>
        </div>
        <TheSocialMedia />
      </div>

      <!-- Right Image/Logo Column -->
      <div class="md:col-span-5 flex justify-center md:justify-end">
        <div class="w-full max-w-[360px] aspect-square bg-white border border-neutral-200 p-4 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <img
            class="h-full w-full object-contain rounded-2xl bg-neutral-50"
            src="/hussain_logo.png"
            alt="Hussain Ullah Logo"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom cursor styling to match your minimalist theme */
:deep(.typed-cursor) {
  color: #171717; /* neutral-900 */
  font-weight: 300;
}
</style>
