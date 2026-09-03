<template>
  <div class="rounded-2xl  px-3 md:p-8 flex flex-col gap-5">
    <!-- home - TheHero.vue -->
    <HomeTheHero />

    <div class="flex justify-center xl:justify-start">
      <HomeSocialMediaApp />
    </div>

    <HomeTheProjects />
    <hr class=" border-gray-100">

    <HomeStack />
    <hr class=" border-gray-100">

    <!-- home - TheTechStack.vue -->
    <HomeTheTechStack />

    <hr class=" border-gray-100">

    <HomeContactForm />
    <hr class=" border-gray-100">

    <HomeTheFooter />
  </div>
</template>
