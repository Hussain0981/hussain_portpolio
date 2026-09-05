<template>
  <section id="skills" class=" text-neutral-600 overflow-hidden">
    <div class="w-full">
      <!-- Infinite Marquee Footer -->
      <div class="relative w-full overflow-hidden py-2 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-neutral-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-neutral-50 after:to-transparent">
        <div class="flex gap-16 animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 dark:text-slate-200">
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
