<template>
  <div class="rounded-2xl  bg-white px-3 md:p-8 flex flex-col gap-5">
    <!-- home - TheHero.vue -->
    <HomeTheHero />
    <!-- home - TheTechStack.vue -->
    <HomeTheTechStack />

    <hr class=" border-gray-100">

    <!-- projects -->
    <h2 class="text-xl font-semibold">
      My open source Projects
    </h2>
    <TheProjects />
    <hr class=" border-gray-100">
  </div>
</template>
