<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Background Watermark Typography -->
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10
             uppercase text-[18vw] font-black text-slate-200/40 select-none pointer-events-none"
    >
      <span>Hussain</span>
    </div>

    <!-- Header -->
    <header class="h-18 bg-gray-100 shadow-sm sticky top-0 z-40">
      <NavigationTheHeader />
    </header>

    <!-- Main Content Stacking Context -->
    <main class="relative z-10 max-w-7xl mx-auto sm:px-3 lg:px-8">
      <slot />
    </main>
  </div>
</template>
