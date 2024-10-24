<template>
  <div class="mt-10">
    <div class="flex items-center gap-4">
      <NuxtImg src="/images/avatar.jpg" class="w-20 h-20 rounded-full object-cover" alt="Nguyễn Hồng Đức" />

      <div>
        <div class="flex items-center gap-3">
          <p class="text-xl font-bold dark:text-[#e6e6e6]">Nguyen Hong Duc</p>
        </div>
        <p class="text-sm text-[#4A576F] mt-1 dark:text-[#ccc]">Front-End Developer</p>
      </div>
    </div>

    <div class="mt-6">
      <p class="text-[#22242C] dark:text-[#ccc]">
        Hi, I am a frontend developer with over 4.5 years of experience. As a curious learner, I aspire to develop and
        contribute my skills in a professional environment.
      </p>
      <p class="text-[#22242C] mt-4 dark:text-[#ccc]">
        And I am the founder of <DiscoveryLink content="Stormik" link="https://stormik.org" /> browser!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscoveryLink from '../../components/DiscoveryLink.vue';
</script>
