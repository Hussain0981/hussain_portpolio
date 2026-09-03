<template>
  <div class="overflow-hidden">
    <header class="h-18 bg-gray-100 shadow-sm sticky top-0 z-40">
      <NavigationTheHeader />
    </header>
    <main class="max-w-7xl mx-auto sm:px-3 lg:px-8 ">
      <slot />
    </main>
  </div>
</template>
