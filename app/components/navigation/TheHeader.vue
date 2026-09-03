<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
const colorMode = useColorMode()

// Dark mode utility action
function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
]

const langOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
    <div class="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        HUB<span class="text-green-500">.</span>
      </NuxtLink>

      <!-- Primary Navigation & Mobile Drawer -->
      <ul
        class="fixed top-0 right-0 h-screen w-full sm:w-[50%] xl:w-auto bg-white xl:bg-transparent z-40 p-6 xl:p-0 flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-4 transition-transform ease-in-out duration-300 xl:static xl:h-auto xl:translate-x-0"
        :class="[isShow ? 'translate-x-0' : 'translate-x-full xl:translate-x-0']"
      >
        <!-- Close Button (Mobile Only) -->
        <li class="w-full flex justify-end xl:hidden">
          <button class="text-2xl font-semibold p-2 text-gray-700" aria-label="Close menu" @click="isShow = false">
            <Icon size="25" name="material-symbols:close-rounded" />
          </button>
        </li>

        <!-- Nav Links -->
        <li v-for="nav in navigations" :key="nav.path" class="w-full xl:w-auto">
          <NuxtLink
            :to="nav.path"
            class="block text-3xl italic xl:not-italic py-3 xl:py-2 xl:text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            active-class="text-green-600 dark:text-green-400"
            @click="isShow = false"
          >
            {{ nav.name }}
          </NuxtLink>
        </li>

        <!-- Actions Inside Mobile Drawer (Hidden on Desktop) -->
        <li class="flex items-center gap-4 mt-auto pt-6 border-t border-green-400 xl:hidden">
          <button class="text-gray-600 dynamic-icon" aria-label="Toggle dark mode" @click="toggleTheme">
            <Icon :name="colorMode.value === 'dark' ? 'mynaui:sun' : 'mynaui:moon'" size="24" />
          </button>

          <NuxtLink
            to="https://github.com/Hussain0981?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="text-gray-600"
          >
            <Icon name="bi:github" size="20" />
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop Action Panel & Mobile Menu Button Trigger -->
      <div class="flex items-center gap-4">
        <!-- Global Toolbar (Always Visible on Desktop) -->
        <div class="hidden xl:flex items-center gap-2">
          <!-- Theme Switcher -->
          <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Change color mode" @click="toggleTheme">
            <Icon :name="colorMode.value === 'dark' ? 'mynaui:sun' : 'mynaui:moon'" size="24" />
          </button>

          <!-- GitHub Link -->
          <NuxtLink
            to="https://github.com/Hussain0981?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Icon name="bi:github" size="20" />
          </NuxtLink>

          <!-- Language Selector -->
          <div
            class="relative"
            @mouseenter="langOpen = true"
            @mouseleave="langOpen = false"
          >
            <button
              type="button"
              aria-label="Change language"
              class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Icon name="mynaui:globe" size="24" />
            </button>

            <Transition
              enter-active-class="transition ease-out duration-150"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="langOpen"
                class="absolute right-0 top-full mt-2 w-32 rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-lg py-1 z-50"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  type="button"
                  class="w-full text-left px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {{ lang.label }}
                </button>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Hamburger Menu Icon (Mobile Only - Hidden on Desktop xl screens) -->
        <button class="xl:hidden p-2 text-gray-600 dark:text-gray-300" aria-label="Open menu" @click="isShow = true">
          <Icon name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger" size="24" />
        </button>
      </div>
    </div>
  </header>
</template>
