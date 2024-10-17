<template>
  <footer class="w-full px-96 relative">
    <!-- <div
      class="w-full h-[350px] absolute bottom-0 bg-cover left-0 z-0"
      style="background-image: url('/images/background-bottom.png')"
    /> -->
    <img src="/images/background-bottom.png" class="w-full h-[350px] absolute bottom-0 bg-cover left-0 z-0" />
    <div class="w-full z-10 pt-20 pb-10 relative">
      <div class="w-full h-[1px] bg-[#f7f7f8]" />
      <div class="mt-16 flex flex-col items-center">
        <div class="flex items-center gap-10 justify-center">
          <div v-for="item in SPONSOR_LIST" :key="item.name">
            <a :href="item.link" target="_blank" class="flex items-center gap-2">
              <img
                :src="item.logo"
                :alt="item.name"
                :title="item.name"
                :class="['w-auto filter grayscale brightness-125', item.height || 'h-7', item.opacity]"
              />
              <span class="font-medium text-[14px] text-[#a6a6a6]">{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
      <p class="text-center text-sm text-[#a6a6a6] mt-12">© Copyright 2024 - All rights reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const SPONSOR_LIST = [
  {
    name: 'Stormik',
    logo: 'https://stormik.org/images/logo.png',
    link: 'https://stormik.org',
    height: 'h-9'
  },
  {
    name: 'Vercel',
    logo: 'https://www.svgrepo.com/show/327408/logo-vercel.svg',
    link: 'https://vercel.com',
    opacity: 'opacity-40'
  },
  {
    name: 'Github',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    link: 'https://github.com',
    opacity: 'opacity-40'
  },
  {
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://figma.com'
  }
];
</script>
