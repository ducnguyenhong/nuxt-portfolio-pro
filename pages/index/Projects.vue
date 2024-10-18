<template>
  <div class="mt-16">
    <SectionHome title="Projects" />
  </div>

  <div>
    <div class="grid grid-cols-3 gap-x-7 gap-y-5">
      <div v-for="item in PROJECTS" :key="item.name">
        <img :src="item.thumbnail" class="w-full h-40 object-cover rounded-lg border border-[#e6e6e6]" />
        <div class="flex items-center gap-1.5 mt-2">
          <img :src="item.logo" class="h-5 w-5 rounded-full object-contain" />
          <p class="font-semibold">{{ item.name }}</p>
        </div>
        <p class="text-[#828282] mt-0.5 text-[13px]">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHome from '~/components/SectionHome.vue';
import { PROJECTS } from '~/utils/data';
</script>
