// composables/useTheme.ts
export function useTheme() {
  const colorMode = useColorMode()
  const STORAGE_KEY = 'nuxt-theme'

  function toggleDark(event?: MouseEvent) {
    const isDark = colorMode.value === 'dark'
    const newTheme = isDark ? 'light' : 'dark'

    // Click position (optional circular reveal animation ke liye)
    if (event) {
      document.documentElement.style.setProperty('--x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--y', `${event.clientY}px`)
    }

    if (!document.startViewTransition) {
      colorMode.preference = newTheme
      localStorage.setItem(STORAGE_KEY, newTheme)
      return
    }

    document.startViewTransition(() => {
      colorMode.preference = newTheme
    })

    localStorage.setItem(STORAGE_KEY, newTheme)
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
      colorMode.preference = saved
    }
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      colorMode.preference = prefersDark ? 'dark' : 'light'
    }
  })

  return { toggleDark, colorMode }
}
