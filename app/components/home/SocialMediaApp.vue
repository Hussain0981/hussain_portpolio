<script setup lang="ts">
const apps = [
  {
    title: 'GitHub',
    path: 'https://github.com/Hussain0981?tab=repositories',
    icon: 'simple-icons:github',
  },
  {
    title: 'Bluesky',
    path: '',
    icon: 'simple-icons:bluesky',
  },
  {
    title: 'Discord',
    path: 'https://discord.gg/9uefKhRtA',
    icon: 'simple-icons:discord',
  },
  {
    title: 'Twitter',
    path: 'https://x.com/HussainUllah098',
    icon: 'simple-icons:x',
  },
  {
    title: 'Instagram',
    path: 'https://www.instagram.com/itxhasty10?igsi=MW8zZ255ODJ6NGVwOQ==',
    icon: 'simple-icons:instagram',
  },
]

// Helper function to detect middle index dynamically
const isMiddle = (index: number) => index === Math.floor(apps.length / 2)
</script>

<template>
  <div class="flex items-center justify-center w-full gap-3 py-2">
    <NuxtLink
      v-for="(app, index) in apps"
      :key="index"
      :to="app.path"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="app.title"
      class="group flex items-center justify-center rounded-full transition-all duration-300" :class="[
        isMiddle(index)
          ? 'w-14 h-14 bg-slate-600 dark:bg-slate-500 text-white hover:bg-slate-700 dark:hover:bg-slate-600 hover:scale-110 active:scale-95'
          : 'w-11 h-11 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 hover:scale-105 active:scale-95',
      ]"
    >
      <Icon
        :name="app.icon"
        :size="isMiddle(index) ? 28 : 22"
        class="transition-colors duration-300" :class="[
          isMiddle(index)
            ? 'text-white'
            : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white',
        ]"
      />
    </NuxtLink>
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
