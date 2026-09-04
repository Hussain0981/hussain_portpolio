<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const isShow = ref(false)
const langOpen = ref(false)
const lastScrollY = ref(0)
const isScrollingDown = ref(false) // naam fix: ye TRUE hoga jab neeche scroll ho raha ho
const isHeaderVisible = ref(true)

let ticking = false // requestAnimationFrame throttle flag

// Lock page body scrolling (X & Y axes) when mobile menu opens
watch(isShow, (val) => {
  if (typeof window !== 'undefined') {
    if (val) {
      document.body.classList.add('overflow-hidden', 'touch-none')
    }
    else {
      document.body.classList.remove('overflow-hidden', 'touch-none')
    }
  }
})

function updateHeaderVisibility() {
  const currentScrollY = Math.max(0, window.scrollY)

  isScrollingDown.value = currentScrollY > lastScrollY.value
  lastScrollY.value = currentScrollY

  // Neeche scroll ho raha ho aur 150px se zyada scroll ho chuka ho -> header chupao
  if (isScrollingDown.value && currentScrollY > 150) {
    isHeaderVisible.value = false
  }
  // Upar scroll ho raha ho -> header wapas dikhao
  else if (!isScrollingDown.value) {
    isHeaderVisible.value = true
  }

  ticking = false
}

// requestAnimationFrame se throttle karte hain taake scroll per pixel
// function na chale, sirf har render frame par ek baar chale (smooth + performant)
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateHeaderVisibility)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)

  // Clean up body class if component unmounts while menu is open
  if (typeof window !== 'undefined') {
    document.body.classList.remove('overflow-hidden', 'touch-none')
  }
})

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const languages = [
  { code: 'en', label: 'English', flag: 'emojione:flag-for-united-states' },
  { code: 'ar', label: 'العربية', flag: 'emojione:flag-for-saudi-arabia' },
  { code: 'fr', label: 'Français', flag: 'emojione:flag-for-france' },
]

const currentLang = ref(languages[0])

function selectLanguage(lang: typeof languages[number]) {
  currentLang.value = lang
  langOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-surface-200/60 bg-surface-50/70 backdrop-blur-xl transition-all duration-300 ease-in-out will-change-transform"
    :class="isHeaderVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Brand Logo -->
        <NuxtLink
          to="/" class="group flex items-center gap-1.5 font-bold tracking-tight text-primary-900 text-xl"
          @click="isShow = false"
        >
          <div
            class="w-8 h-8 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center font-extrabold text-sm border border-accent-500/20 group-hover:scale-105 transition-transform"
          >
            H
          </div>
          <span>HUB<span class="text-accent-500 inline-block animate-pulse">.</span></span>
        </NuxtLink>

        <!-- Desktop Navigation Links (Centered Pill Bar) -->
        <nav
          class="hidden md:flex items-center gap-1 bg-surface-100/60 p-1.5 rounded-full border border-surface-200/50"
        >
          <NuxtLink
            v-for="nav in navigations" :key="nav.path" :to="nav.path"
            class="px-4 py-1.5 text-xs font-semibold rounded-full text-primary-500 hover:text-primary-900 hover:bg-surface-50 transition-all duration-200"
            active-class="!bg-surface-50 !text-accent-600 shadow-xs border border-surface-200/50"
          >
            {{ nav.name }}
          </NuxtLink>
        </nav>

        <!-- Desktop Action Controls -->
        <div class="hidden md:flex items-center gap-2">
          <!-- Language Selector -->
          <div class="relative" @mouseleave="langOpen = false">
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-surface-200/80 bg-surface-50/50 text-primary-600 text-xs font-medium hover:bg-surface-100 transition-all"
              @click="langOpen = !langOpen"
            >
              <Icon name="mynaui:globe" size="18" class="text-primary-400" />
              <span class="uppercase font-bold text-[11px]">{{ currentLang.code }}</span>
              <Icon
                name="lucide:chevron-down" size="12" class="text-primary-400 transition-transform"
                :class="{ 'rotate-180': langOpen }"
              />
            </button>

            <!-- Language Dropdown -->
            <Transition
              enter-active-class="transition ease-out duration-150"
              enter-from-class="opacity-0 scale-95 -translate-y-1"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-1"
            >
              <div
                v-if="langOpen"
                class="absolute right-0 mt-2 w-36 rounded-2xl border border-surface-200 bg-surface-50/95 backdrop-blur-md shadow-xl py-1.5 z-50 space-y-0.5 overflow-hidden"
              >
                <button
                  v-for="lang in languages" :key="lang.code" type="button"
                  class="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-primary-600 hover:bg-surface-100 transition-colors"
                  :class="{ 'text-accent-600 font-bold bg-accent-50/50': currentLang.code === lang.code }"
                  @click="selectLanguage(lang)"
                >
                  <span class="flex items-center gap-2">
                    <Icon :name="lang.flag" size="16" />
                    {{ lang.label }}
                  </span>
                  <Icon v-if="currentLang.code === lang.code" name="lucide:check" size="14" class="text-accent-500" />
                </button>
              </div>
            </Transition>
          </div>

          <!-- Color Theme Toggle -->
          <UIChangeThemeButton />

          <!-- GitHub Direct Link -->
          <NuxtLink
            to="https://github.com/Hussain0981?tab=repositories" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub Profile"
            class="w-9 h-9 rounded-xl border border-surface-200/80 bg-surface-50/50 text-primary-600 flex items-center justify-center hover:bg-surface-100 transition-all"
          >
            <Icon name="bi:github" size="18" />
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex items-center gap-1 md:hidden">
          <UIChangeThemeButton />

          <button
            type="button" aria-label="Toggle navigation drawer" class="p-2 text-primary-700 rounded-xl"
            @click="isShow = !isShow"
          >
            <Icon :name="isShow ? 'lucide:x' : 'lucide:menu'" size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Backdrop Overlay for Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isShow" class="fixed inset-0 top-16 bg-surface-950/40 backdrop-blur-sm z-40 md:hidden"
        @click="isShow = false" @touchmove.prevent
      />
    </Transition>

    <!-- Mobile Drawer Overlay -->
    <Transition
      enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isShow"
        class="relative z-50 md:hidden border-b border-surface-200 bg-surface-50/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <!-- Mobile Links Stack -->
        <div class="space-y-1">
          <NuxtLink
            v-for="nav in navigations" :key="nav.path" :to="nav.path"
            class="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-600 hover:bg-surface-100 transition-all"
            active-class="!bg-accent-50 !text-accent-600" @click="isShow = false"
          >
            <span>{{ nav.name }}</span>
            <Icon name="lucide:chevron-right" size="16" class="opacity-40" />
          </NuxtLink>
        </div>

        <!-- Mobile Drawer Footer Tools -->
        <div class="pt-4 border-t border-surface-100 flex items-center justify-between">
          <!-- Mobile Languages Selection Grid -->
          <div class="flex items-center gap-1.5">
            <button
              v-for="lang in languages" :key="lang.code" type="button"
              class="px-2.5 py-1 rounded-lg text-xs font-bold border transition-all" :class="currentLang.code === lang.code
                ? 'bg-primary-900 text-surface-50 border-transparent'
                : 'border-surface-200 text-primary-400'" @click="selectLanguage(lang)"
            >
              {{ lang.code.toUpperCase() }}
            </button>
          </div>

          <!-- Mobile External Social Link -->
          <NuxtLink
            to="https://github.com/Hussain0981?tab=repositories" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 text-xs font-bold text-primary-600 px-3 py-1.5 rounded-lg border border-surface-200"
          >
            <Icon name="bi:github" size="16" />
            <span>GitHub</span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
