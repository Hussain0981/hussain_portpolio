<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

interface StackItem {
  title: string
  icon: string
  color?: string
}

interface StackCategory {
  name: string
  items: StackItem[]
}

interface StackSection {
  key: string
  title: string
  description: string
  categories: StackCategory[]
}

const stacks = ref<StackSection[]>([
  {
    key: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, high-performance interfaces and visual experiences.',
    categories: [
      {
        name: 'Structure & Markup',
        items: [{ title: 'HTML5', icon: 'devicon:html5' }],
      },
      {
        name: 'Styling & Design',
        items: [
          { title: 'CSS3', icon: 'devicon:css3' },
          { title: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
          { title: 'UnoCSS', icon: 'vscode-icons:file-type-unocss' },
        ],
      },
      {
        name: 'Logic & Languages',
        items: [
          { title: 'JavaScript', icon: 'logos:javascript' },
          { title: 'TypeScript', icon: 'logos:typescript-icon' },
        ],
      },
      {
        name: 'Frameworks & Ecosystem',
        items: [
          { title: 'Vue.js', icon: 'logos:vue' },
          { title: 'Nuxt', icon: 'logos:nuxt-icon' },
        ],
      },
      {
        name: 'Animation & 3D',
        items: [
          { title: 'GSAP', icon: 'logos:greensock-icon' },
          { title: 'Three.js', icon: 'logos:threejs' },
        ],
      },
    ],
  },
  {
    key: 'desktop',
    title: 'Desktop Applications',
    description: 'Building cross-platform desktop software and native UI solutions.',
    categories: [
      {
        name: 'Frameworks & Runtimes',
        items: [
          { title: 'JavaFX', icon: 'logos:java' },
          { title: 'Electron.js', icon: 'logos:electron' },
        ],
      },
    ],
  },
  {
    key: 'backend',
    title: 'Backend Ecosystem',
    description: 'Building robust microservices, serverless APIs, and application logic.',
    categories: [
      {
        name: 'Frameworks & Runtimes',
        items: [
          { title: 'Node.js', icon: 'logos:nodejs-icon' },
          { title: 'Express.js', icon: 'devicon:express' },
          { title: 'Java', icon: 'logos:java' },
          { title: 'Spring Boot', icon: 'logos:spring-icon' },
          { title: 'Nitro', icon: 'unjs:nitro' },
        ],
      },
    ],
  },
  {
    key: 'databases-orm',
    title: 'Databases & ORMs',
    description: 'Structured storage solutions, query optimization, and data modeling tools.',
    categories: [
      {
        name: 'Relational & NoSQL',
        items: [
          { title: 'MySQL', icon: 'logos:mysql-icon' },
          { title: 'PostgreSQL', icon: 'logos:postgresql' },
          { title: 'MongoDB', icon: 'logos:mongodb-icon' },
        ],
      },
      {
        name: 'ORMs & ODMs',
        items: [
          { title: 'Drizzle ORM', icon: 'simple-icons:drizzle' },
          { title: 'Mongoose', icon: 'devicon:mongoose' },
        ],
      },
    ],
  },
  {
    key: 'system-design',
    title: 'System Design & Architecture',
    description: 'Scalable distributed systems, caching, messaging, and API architecture.',
    categories: [
      {
        name: 'Architecture & Concepts',
        items: [
          { title: 'Microservices', icon: 'carbon:microservices-1' },
          { title: 'RESTful APIs', icon: 'dashicons:rest-api' },
          { title: 'GraphQL', icon: 'logos:graphql' },
          { title: 'Load Balancing', icon: 'tabler:scale-outline' },
        ],
      },
      {
        name: 'Caching & Queues',
        items: [
          { title: 'Redis', icon: 'logos:redis' },
          { title: 'Apache Kafka', icon: 'logos:kafka-icon' },
          { title: 'RabbitMQ', icon: 'logos:rabbitmq-icon' },
        ],
      },
      {
        name: 'DevOps & Containers',
        items: [
          { title: 'Docker', icon: 'logos:docker-icon' },
          { title: 'Kubernetes', icon: 'logos:kubernetes' },
          { title: 'Nginx', icon: 'logos:nginx' },
        ],
      },
    ],
  },
])
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:p-8 space-y-8 sm:space-y-10 bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300">
    <!-- Overall Section Heading -->
    <div class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <span class="inline-block px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">
        Technical Capabilities
      </span>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-3">
        Technology Stack & Architecture
      </h1>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
        A structured breakdown of core languages, frameworks, runtime environments, and infrastructure tools.
      </p>
    </div>

    <!-- Stack Cards Loop -->
    <div class="space-y-6 sm:space-y-8">
      <section
        v-for="stack in stacks"
        :key="stack.key"
        class="bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 relative overflow-hidden group"
      >
        <!-- Top Accent Gradient Bar -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <!-- Header Block -->
        <div class="mb-6 pb-4 border-b border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {{ stack.title }}
            </h2>
            <p v-if="stack.description" class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
              {{ stack.description }}
            </p>
          </div>
          <span class="self-start sm:self-auto text-[10px] sm:text-xs font-bold px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600 shrink-0">
            {{ stack.categories.reduce((acc, cat) => acc + cat.items.length, 0) }} Technologies
          </span>
        </div>

        <!-- Categories & Tech Items -->
        <div class="space-y-6">
          <div
            v-for="category in stack.categories"
            :key="category.name"
            class="space-y-3"
          >
            <!-- Category Label -->
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {{ category.name }}
              </h3>
            </div>

            <!-- Grid Items Container (Adaptive responsive sizing) -->
            <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5 sm:gap-3">
              <div
                v-for="item in category.items"
                :key="item.title"
                class="group/item relative flex flex-col items-center justify-center rounded-xl border border-slate-200/80 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-2.5 sm:p-3 aspect-square transition-all duration-200 hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-slate-900/50 cursor-pointer"
              >
                <!-- Icon with adaptive sizing -->
                <Icon
                  :icon="item.icon"
                  class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-slate-700 dark:text-slate-200 transition-transform group-hover/item:scale-110"
                />

                <!-- Tooltip on hover -->
                <span
                  class="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 scale-90 whitespace-nowrap rounded-lg bg-slate-900 dark:bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-white dark:text-slate-900 opacity-0 shadow-lg transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:scale-100 group-hover/item:opacity-100"
                >
                  {{ item.title }}
                  <span class="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Smooth font rendering */
div {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
