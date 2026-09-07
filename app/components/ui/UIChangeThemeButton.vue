<script lang="ts" setup>
const colorMode = useColorMode()
const { toggleDark } = useTheme()

// Preference ke hisab se icon aur label map
const icons: Record<string, string> = {
  light: 'lucide:sun',
  dark: 'lucide:moon',
  system: 'lucide:monitor',
}

const labels: Record<string, string> = {
  light: 'Switch to dark mode',
  dark: 'Switch to light mode',
  system: 'Using system theme',
}
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="w-9 h-9 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
      :aria-label="labels[colorMode.preference] ?? 'Toggle theme'"
      @click="toggleDark"
    >
      <Icon
        :name="icons[colorMode.preference] ?? 'lucide:sun'"
        size="18"
      />
    </button>

    <!-- Hydration fallback placeholder -->
    <template #fallback>
      <div class="w-9 h-9 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50" />
    </template>
  </ClientOnly>
</template>
