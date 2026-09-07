<script setup lang="ts">
const { tm, rt, locale } = useI18n()
const motions = computed<string[]>(() => {
  const raw = tm('motions') as string[]
  return Array.isArray(raw) ? raw.map(item => rt(item)) : []
})
</script>

<template>
  <section id="skills" class="text-neutral-600 overflow-hidden">
    <div class="w-full">
      <!-- Infinite Marquee Footer -->
      <div class="relative w-full overflow-hidden py-3 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-neutral-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-neutral-50 after:to-transparent">
        <div class="flex w-max" :class="[locale === 'ar' ? 'animate-marquee-reverse' : 'animate-marquee']">
          <!-- Track A -->
          <div class="flex shrink-0 gap-16 pr-16 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 dark:text-slate-200">
            <span v-for="(value, idx) in motions" :key="`a-${idx}`">{{ value }}</span>
          </div>
          <!-- Track B (exact duplicate, makes the loop seamless) -->
          <div class="flex shrink-0 gap-16 pr-16 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 dark:text-slate-200" aria-hidden="true">
            <span v-for="(value, idx) in motions" :key="`b-${idx}`">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 25s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

@keyframes marquee-reverse {
  0% { transform: translate3d(50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
