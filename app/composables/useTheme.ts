// composables/useTheme.ts
export function useTheme() {
  const colorMode = useColorMode()
  const STORAGE_KEY = 'nuxt-theme'

  function toggleDark(event?: MouseEvent) {
    const isDark = colorMode.value === 'dark'
    const newTheme = isDark ? 'light' : 'dark'

    // Click position set karein (circular reveal ka center)
    const x = event?.clientX ?? window.innerWidth / 2
    const y = event?.clientY ?? window.innerHeight / 2
    document.documentElement.style.setProperty('--x', `${x}px`)
    document.documentElement.style.setProperty('--y', `${y}px`)

    if (!document.startViewTransition) {
      colorMode.preference = newTheme
      localStorage.setItem(STORAGE_KEY, newTheme)
      return
    }

    document.startViewTransition(() => {
      colorMode.preference = newTheme
      localStorage.setItem(STORAGE_KEY, newTheme)
    })
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
