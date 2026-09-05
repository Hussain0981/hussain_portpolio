<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const title = ref('')
const message = ref('')

function handleSubmit() {
  console.warn('Submitted:', { title: title.value, message: message.value })
}
</script>

<template>
  <div class="w-full p-6 bg-white rounded-2xl shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column: Info & Form -->
      <div id="info" class="space-y-6">
        <div>
          <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Contact Information
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Send us a message or find our location below.
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Title Input -->
          <div class="flex flex-col gap-1.5">
            <label for="title" class="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
              Title
            </label>
            <input
              id="title"
              v-model="title"
              type="text"
              placeholder="Enter subject or title"
              class="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            >
          </div>

          <!-- Message Textarea -->
          <div class="flex flex-col gap-1.5">
            <label for="message" class="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              class="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
            />
          </div>

          <button
            type="submit"
            class="w-full py-2.5 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-medium text-sm rounded-lg transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>

        <!-- Divider -->
        <hr class="border-slate-100 dark:border-slate-700 my-4">

        <!-- Contact Details Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <!-- Phone Card -->
          <div class="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-100 dark:border-slate-600 flex items-start gap-3">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600 shadow-2xs">
              <Icon icon="ph:phone-duotone" class="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span class="block text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">Call Us</span>
              <a href="tel:+923275609507" class="text-xs font-semibold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +92 327 5609507
              </a>
            </div>
          </div>

          <!-- Address Card -->
          <div class="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-100 dark:border-slate-600 flex items-start gap-3">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600 shadow-2xs">
              <Icon icon="ph:map-pin-duotone" class="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span class="block text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">Address</span>
              <address class="text-xs font-medium text-slate-700 dark:text-slate-100 not-italic leading-relaxed">
                Dhakki, Charsadda KPK, Pakistan
              </address>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Map Frame -->
      <div id="map" class="w-full h-full min-h-[320px] lg:min-h-[420px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 relative">
        <iframe
          title="Google Map Location"
          src="https://maps.google.com/maps?q=Dhakki,%20Charsadda,%20KPK,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="w-full h-full absolute inset-0 border-0 map-iframe"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS Filter inversion to convert Google Maps to Dark Mode */
:deep(.dark) .map-iframe,
.dark .map-iframe {
  filter: grayscale(100%) invert(92%) contrast(83%);
  transition: filter 0.3s ease-in-out;
}
</style>
