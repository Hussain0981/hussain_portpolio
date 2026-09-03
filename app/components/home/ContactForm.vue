<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const message = ref('')

function handleSubmit() {
  // Handle form submission logic here
  console.log('Submitted:', { title: title.value, message: message.value })
}
</script>

<template>
  <div class="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column: Info & Form -->
      <div id="info" class="space-y-6">
        <div>
          <h2 class="text-xl font-bold text-slate-800 tracking-tight">
            Contact Information
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Send us a message or find our location below.
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Title Input -->
          <div class="flex flex-col gap-1.5">
            <label for="title" class="text-xs font-semibold text-slate-700 tracking-wide">
              Title
            </label>
            <input
              id="title"
              v-model="title"
              type="text"
              placeholder="Enter subject or title"
              class="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 text-slate-800 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
            >
          </div>

          <!-- Message Textarea -->
          <div class="flex flex-col gap-1.5">
            <label for="message" class="text-xs font-semibold text-slate-700 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              class="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 text-slate-800 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
            />
          </div>

          <button
            type="submit"
            class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>

        <!-- Divider -->
        <hr class="border-slate-100 my-4">

        <!-- Contact Details Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <!-- Phone Card -->
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
            <div class="p-2 bg-white rounded-lg text-slate-700 border border-slate-200/60 shadow-2xs">
              <!-- Phone Icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span class="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Call Us</span>
              <a href="tel:+923275609507" class="text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                +92 327 5609507
              </a>
            </div>
          </div>

          <!-- Address Card -->
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
            <div class="p-2 bg-white rounded-lg text-slate-700 border border-slate-200/60 shadow-2xs">
              <!-- Location Icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Address</span>
              <address class="text-xs font-medium text-slate-700 not-italic leading-relaxed">
                Dhakki, Charsadda KPK, Pakistan
              </address>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Map Frame -->
      <div id="map" class="w-full h-full min-h-[320px] lg:min-h-[420px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
        <iframe
          title="Google Map Location"
          src="https://maps.google.com/maps?q=Dhakki,%20Charsadda,%20KPK,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="w-full h-full absolute inset-0 border-0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>
