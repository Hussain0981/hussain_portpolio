import { onMounted, ref, watch } from 'vue'

// Yahan par jitne bhi themes chahiye add kar sakte hain
export const THEMES = ['light', 'dark'] as const
export type Theme = typeof THEMES[number]

const STORAGE_KEY = 'app-theme'

export function useTheme() {
  const theme = ref<Theme>('light')

  function applyTheme(value: Theme) {
    document.documentElement.setAttribute('data-theme', value)
  }

  function setTheme(value: Theme) {
    theme.value = value
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null

    if (saved && THEMES.includes(saved)) {
      theme.value = saved
    }
    else {
      // Pehli visit par system preference follow karein (light/dark)
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }

    applyTheme(theme.value)
  })

  watch(theme, (value) => {
    applyTheme(value)
    localStorage.setItem(STORAGE_KEY, value)
  })

  return {
    theme,
    setTheme,
    themes: THEMES,
  }
}
