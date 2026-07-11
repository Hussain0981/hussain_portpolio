<template>
  <div>
    <div>
      <NuxtImg src="/hussain_logo.png" alt="Hussain Ullah" class="h-32 w-32 rounded-2xl" />
    </div>

    <div
      class="inline-flex w-[130px] items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-green-500" />
      Open to work
    </div>

    <h2 class="text-3xl font-semibold text-gray-900">
      Hussain Ullah
    </h2>

    <p class="leading-relaxed text-gray-700">
      Hey, I'm Hussain Ullah — aka <em>Hasty</em>. Creator of the Open Source Full Stack Dashboard.
      Currently contributing to open source full time.
    </p>
    <p class="leading-relaxed text-gray-700">
      Most of my work is open source and available on
      <NuxtLink class="text-black underline" to="https://github.com/Hussain0981">
        <span>GitHub</span>
      </NuxtLink>, you can also checkout my
      <NuxtLink class="text-black underline" to="https://github.com/Hussain0981">
        <span>recent comments</span>
      </NuxtLink>.
    </p>
    <div class="leading-relaxed text-gray-700 flex items-center gap-2">
      I also enjoy football
      <IconsTheFootball size="20" /> and walking
      <IconsTheWalk size="25" />
    </div>
  </div>
</template>
