<script lang="ts" setup>
import { reactive } from 'vue'

const projects = reactive({
  desktop: {
    title: 'Desktop Applications',
    data: [
      {
        id: 1,
        title: 'Pharmacy Management System',
        description: 'A comprehensive desktop application for managing pharmacy operations, including inventory, sales, and customer management.',
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'Drizzle ORM', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
      {
        id: 2,
        title: 'HOS Management System',
        description: 'An advanced hospital operating system designed to streamline healthcare workflows, patient records, and staff scheduling.',
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'Drizzle ORM', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
      {
        id: 3,
        title: 'GAME Management System',
        description: 'A performance-optimized desktop platform for gaming zone assets tracking, tournament brackets, and real-time billing.',
        technologies: ['Electron.js', 'Vue', 'SQL Server', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
    ],
  },
  web: {
    title: 'Web Applications',
    data: [
      {
        id: 4,
        title: 'SaaS Analytics Platform',
        description: 'A dynamic web application featuring real-time data analytics pipelines, interactive dashboards, and multi-tenant billing.',
        technologies: ['Vue 3', 'Nuxt', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwindcss'],
        image: '',
      },
    ],
  },
  website: {
    title: 'Websites & Portfolios',
    data: [
      {
        id: 5,
        title: 'E-Commerce Landing Page',
        description: 'A high-converting, fully responsive landing page optimized for core web vitals and seamless user experience.',
        technologies: ['Vue', 'Vite', 'Tailwindcss', 'GSAP Animation'],
        image: '',
      },
    ],
  },
})
</script>

<template>
  <div class="py-10">
    <div class="mb-12 md:mb-20">
      <span class="text-xs font-mono uppercase tracking-[0.3em] text-emerald-600 block mb-3">Capabilities</span>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
        My Projects
      </h2>
    </div>

    <div v-for="(project, idx) in projects" :key="idx" class="mb-12">
      <div class="relative flex items-center gap-4 mb-6 ">
        <h2 class="text-xl font-bold text-gray-800 tracking-wide uppercase bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
          {{ project.title }}
        </h2>
        <div class="flex-1 h-[1px] bg-gradient-to-r refinement from-gray-200 to-transparent" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        <div
          v-for="item in project.data"
          :key="item.id"
          class="group flex flex-col justify-between bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md duration-300"
        >
          <div class="flex flex-col flex-1">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {{ item.title }}
              </h3>
              <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                <Icon
                  name="material-symbols:arrow-insert"
                  size="24px"
                  class="icon-transition text-white bg-blue-500 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90"
                />
              </div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {{ item.description }}
            </p>
          </div>

          <div class="relative xl:group-hover:bottom-0 xl:-bottom-28 mt-6 pt-4 border-t border-gray-50 transition-all durations-500">
            <span class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Built With</span>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in item.technologies"
                :key="tech"
                class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors duration-150 cursor-default"
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
</style>
