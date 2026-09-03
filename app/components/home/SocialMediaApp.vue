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
</script>

<template>
  <div class="flex items-center justify-center w-full gap-2">
    <NuxtLink
      v-for="(app, index) in apps"
      :key="index"
      :to="app.path"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="app.title"
      class="group flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 hover:bg-neutral-100"
    >
      <Icon
        :name="app.icon"
        size="25"
        class="text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900"
      />
    </NuxtLink>
  </div>
</template>
