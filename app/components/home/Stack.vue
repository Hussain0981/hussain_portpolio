<script setup lang="ts">
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
          { title: 'Prisma', icon: 'logos:prisma' },
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
  <div class="max-w-6xl mx-auto p-4 md:p-8 space-y-10 bg-white font-sans text-slate-900">
    <!-- Overall Section Heading -->
    <div class="border-b border-slate-100 pb-6">
      <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
        Technical Capabilities
      </span>
      <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
        Technology Stack & Architecture
      </h1>
      <p class="text-sm text-slate-500 mt-1 max-w-2xl">
        A structured breakdown of core languages, frameworks, runtime environments, and infrastructure tools.
      </p>
    </div>

    <!-- Stack Cards Loop -->
    <div class="space-y-8">
      <section
        v-for="stack in stacks"
        :key="stack.key"
        class="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 relative overflow-hidden group"
      >
        <!-- Top Accent Bar -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <!-- Header Block -->
        <div class="mb-6 pb-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h2 class="text-xl font-bold tracking-tight text-slate-900 md:text-2xl flex items-center gap-2">
              {{ stack.title }}
            </h2>
            <p v-if="stack.description" class="mt-1 text-xs md:text-sm text-slate-500 font-normal">
              {{ stack.description }}
            </p>
          </div>
          <span class="self-start md:self-auto text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100">
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
              <span class="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {{ category.name }}
              </h3>
            </div>

            <!-- Grid Items Container -->
            <div class="flex flex-wrap gap-3">
              <div
                v-for="item in category.items"
                :key="item.title"
                class="group/item relative flex flex-col items-center justify-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-3 w-20 h-20 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60 cursor-pointer"
              >
                <Icon
                  :name="item.icon"
                  size="50"
                  class="text-slate-700 transition-transform"
                />

                <!-- Tooltip on hover -->
                <span
                  class="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 scale-90 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:scale-100 group-hover/item:opacity-100"
                >
                  {{ item.title }}
                  <span class="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
