<template>
  <div class="mt-16">
    <SectionHome title="Sponsor" />

    <div class="flex flex-col items-center">
      <div class="flex items-center gap-16 justify-center overflow-x-auto">
        <div v-for="item in SPONSOR_LIST" :key="item.name" class="animate-slide-sponsor">
          <a :href="item.link" target="_blank" class="flex items-center gap-2">
            <img :src="item.logo" :alt="item.name" :title="item.name" :class="['w-auto', item.height || 'h-7']" />
            <span class="font-medium text-[14px] text-[#262626]">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SPONSOR_LIST } from '~/utils/data';
</script>
