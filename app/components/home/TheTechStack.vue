<script setup lang="ts">
/**
 * Data integrated from your professional profile
 */
const frontendSkills = [
  { name: 'Vue / Nuxt', level: 'Expert', tech: 'Composition API, SSR', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript / JavaScript', level: 'Core', tech: 'Typed Logic', icon: 'logos:typescript-icon' },
  { name: 'GSAP / Three.js', level: 'Creative', tech: '3D & Motion', icon: 'logos:threejs' },
  { name: 'CSS / Tailwind / UnoCSS', level: 'Styling', tech: 'Utility-first', icon: 'logos:tailwindcss-icon' },
  { name: 'Nuxt Modules & Libraries', level: 'Advanced', tech: 'Web app UI & logic', icon: 'logos:vueuse' },
]

const backendSkills = [
  { name: 'Node / Express / Nitro H3', type: 'Runtime', tech: 'Server Logic', icon: 'logos:nodejs-icon' },
  { name: 'PostgreSQL / MySQL', type: 'SQL', tech: 'Relational DB', icon: 'logos:postgresql' },
  { name: 'Prisma / Drizzle', type: 'ORM', tech: 'Type-safe Data', icon: 'logos:prisma' },
  { name: 'MongoDB', type: 'NoSQL', tech: 'Document Store', icon: 'logos:mongodb-icon' },
  { name: 'Mongoose', type: 'ODM', tech: 'Mongo DB ODM', icon: 'logos:mongodb-icon' },
]
</script>

<template>
  <section id="skills" class=" text-neutral-600 overflow-hidden">
    <div class="w-full">
      <!-- Section Header -->
      <div class="mb-12 md:mb-20">
        <span class="text-xs font-mono uppercase tracking-[0.3em] text-emerald-600 block mb-3">Capabilities</span>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-500 uppercase">
          Master Tech Stack
        </h2>
      </div>

      <!-- Main Grid Split Container -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-0 relative border border-neutral-200 bg-white rounded-3xl shadow-sm overflow-hidden">
        <!-- Left Side: Frontend -->
        <div class="p-6 sm:p-10 relative group">
          <div class="mb-10">
            <span class="text-neutral-400 font-mono tracking-[0.3em] uppercase text-xs">Side A</span>
            <h3 class="text-3xl font-bold text-neutral-900 mt-1 uppercase tracking-tight">
              Frontend
            </h3>
            <p class="mt-3 text-sm text-neutral-500 max-w-sm">
              Crafting immersive, lightning-fast interfaces with Vue.js, GSAP, and Nuxt.
            </p>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in frontendSkills" :key="skill.name"
              class="flex items-center justify-between p-4 rounded-xl bg-neutral-50/50 border border-neutral-200/60 hover:border-emerald-500/40 hover:bg-white hover:shadow-md hover:shadow-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 group/item"
            >
              <div class="flex items-center gap-4">
                <Icon :name="skill.icon" class="w-7 h-7 opacity-50 group-hover/item:opacity-100 filter grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                <div>
                  <div class="text-sm sm:text-base font-semibold text-neutral-800 group-hover/item:text-neutral-950 transition-colors">
                    {{ skill.name }}
                  </div>
                  <div class="text-[10px] font-mono uppercase text-neutral-400 group-hover/item:text-neutral-500">
                    {{ skill.tech }}
                  </div>
                </div>
              </div>
              <span class="text-[9px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">{{ skill.level }}</span>
            </div>
          </div>
        </div>

        <!-- Decorative Center Divider for Large Screens -->
        <div class="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

        <!-- Right Side: Backend -->
        <div class="p-6 sm:p-10 relative group bg-neutral-50/30 lg:border-l border-neutral-200">
          <!-- Code Block Watermark Background -->
          <div class="absolute top-6 right-6 opacity-[0.04] pointer-events-none font-mono text-[11px] hidden md:block text-blue-600">
            <pre>
async function init() {
  const db = await Drizzle.connect();
  console.log("Database Online");
}
            </pre>
          </div>

          <div class="mb-10 lg:text-right">
            <span class="text-neutral-400 font-mono tracking-[0.3em] uppercase text-xs">Side B</span>
            <h3 class="text-3xl font-bold text-neutral-900 mt-1 uppercase tracking-tight">
              Backend
            </h3>
            <p class="mt-3 text-sm text-neutral-500 max-w-sm lg:ml-auto">
              Building robust server-side ecosystems, scalable database architectures, and highly secure APIs.
            </p>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in backendSkills" :key="skill.name"
              class="flex items-center justify-between p-4 rounded-xl bg-neutral-50/50 border border-neutral-200/60 hover:border-blue-500/40 hover:bg-white hover:shadow-md hover:shadow-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 lg:flex-row-reverse group/item"
            >
              <div class="flex items-center gap-4 lg:flex-row-reverse">
                <Icon :name="skill.icon" class="w-7 h-7 opacity-50 group-hover/item:opacity-100 filter grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                <div class="lg:text-right">
                  <div class="text-sm sm:text-base font-semibold text-neutral-800 group-hover/item:text-neutral-950 transition-colors">
                    {{ skill.name }}
                  </div>
                  <div class="text-[10px] font-mono uppercase text-neutral-400 group-hover/item:text-neutral-500">
                    {{ skill.tech }}
                  </div>
                </div>
              </div>
              <span class="text-[9px] font-mono uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">{{ skill.type }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Infinite Marquee Footer -->
      <div class="mt-16 relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-neutral-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-neutral-50 after:to-transparent">
        <div class="flex gap-16 animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
          <!-- Main Track Loop -->
          <span>Nuxt Modules</span> <span>Express Middleware</span>
          <span>JWT Authentication</span> <span>REST APIs</span>
          <span>GSAP Motion</span> <span>PostgreSQL</span>
          <span>Drizzle ORM</span> <span>Mongoose ODM</span>

          <!-- Duplicate Loop for Seam-free Reset -->
          <span>Nuxt Modules</span> <span>Express Middleware</span>
          <span>JWT Authentication</span> <span>REST APIs</span>
          <span>GSAP Motion</span> <span>PostgreSQL</span>
          <span>Drizzle ORM</span> <span>Mongoose ODM</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  display: inline-flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
</style>
