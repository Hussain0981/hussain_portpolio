<script lang="ts" setup>
import { computed } from 'vue'

const { t } = useI18n()

// Static, non-translatable data (ids, tech stack, images).
// Titles and descriptions come from the i18n locale files (en.json / fr.json / ar.json).
const staticProjects = {
  desktop: {
    data: [
      {
        id: 1,
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'Drizzle ORM', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
      {
        id: 2,
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'Drizzle ORM', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
      {
        id: 3,
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
    ],
  },
  web: {
    data: [
      {
        id: 4,
        technologies: ['Vue 3', 'Nuxt', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
    ],
  },
  website: {
    data: [
      {
        id: 5,
        technologies: ['Vue', 'Vite', 'Tailwindcss', 'GSAP Animation'],
        image: '',
      },
    ],
  },
}

const projects = computed(() => ({
  desktop: {
    title: t('projects.desktop.title'),
    data: staticProjects.desktop.data.map((item, idx) => ({
      ...item,
      title: t(`projects.desktop.data.${idx}.title`),
      description: t(`projects.desktop.data.${idx}.description`),
    })),
  },
  web: {
    title: t('projects.web.title'),
    data: staticProjects.web.data.map((item, idx) => ({
      ...item,
      title: t(`projects.web.data.${idx}.title`),
      description: t(`projects.web.data.${idx}.description`),
    })),
  },
  website: {
    title: t('projects.website.title'),
    data: staticProjects.website.data.map((item, idx) => ({
      ...item,
      title: t(`projects.website.data.${idx}.title`),
      description: t(`projects.website.data.${idx}.description`),
    })),
  },
}))
</script>

<template>
  <div class="dark:text-slate-100">
    <div class="mb-12 md:mb-20">
      <span
        class="text-xs font-mono uppercase tracking-[0.3em] block mb-3"
        style="color: var(--projects-label);"
      >{{ $t('projects.title') }}</span>
      <h2
        class="text-3xl md:text-5xl font-bold tracking-tight uppercase"
        style="color: var(--projects-heading);"
      >
        {{ $t('projects.sub_title') }}
      </h2>
    </div>

    <div v-for="(project, idx) in projects" :key="idx" class="mb-12">
      <div class="relative flex items-center gap-4 mb-6">
        <h2
          class="text-xl font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-sm border"
        >
          {{ project.title }}
        </h2>
        <div
          class="flex-1 h-[1px]"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        <div
          v-for="item in project.data"
          :key="item.id"
          class="group flex flex-col justify-between border border-gray-200 dark:border-gray-700 dark:hover:border-gray-500 rounded-xl p-6 shadow-sm hover:shadow-md duration-300"
        >
          <div class="flex flex-col flex-1">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3
                class="text-lg font-bold transition-colors duration-200"
                style="color: var(--project-title-text);"
              >
                {{ item.title }}
              </h3>
              <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                <Icon
                  name="material-symbols:arrow-insert"
                  size="24px"
                  class="icon-transition rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90"
                />
              </div>
            </div>

            <p
              class="text-sm leading-relaxed line-clamp-3"
            >
              {{ item.description }}
            </p>
          </div>

          <div
            class="relative xl:group-hover:bottom-0 xl:-bottom-28 mt-6 pt-4 border-t transition-all duration-500"
          >
            <span
              class="block text-xs font-semibold uppercase tracking-wider mb-2"
            >Built With</span>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in item.technologies"
                :key="tech"
                class="tech-badge inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border dark:border-gray-500 transition-colors duration-150 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Specific properties targeted inside transition instead of 'all' to ensure text stability */
.icon-transition {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.3s ease-out,
              background-color 0.2s ease;
  will-change: transform, opacity;
}

/* Title hover color (uses CSS var since Tailwind can't read vars at compile time) */
.group:hover h3 {
  color: var(--project-title-hover);
}

.tech-badge:hover {
  background-color: var(--tech-badge-hover-bg);
  color: var(--tech-badge-hover-text);
  border-color: var(--tech-badge-hover-border);
}
</style>
