<template>
  <div class="mt-16">
    <SectionHome title="Experiences" />

    <div>
      <div class="flex flex-col gap-8">
        <div v-for="item in TIMELINES" :key="item.workplace" class="flex items-start gap-4 relative">
          <div class="h-[70%] w-[1px] bg-[#e6e6e6] absolute top-12 left-[18px]" />
          <div class="w-9 h-9 rounded-full border border-[#F2F2F2] flex items-center justify-center">
            <img :src="item.workplaceLogo" class="w-6 h-6 object-contain" />
          </div>
          <div class="flex flex-col flex-1 gap-2">
            <CompanyLink :content="item.workplace" :link="item.workplaceLink" />
            <p class="text-xs text-[#b6b6b6]">{{ item.duration }}</p>
            <p class="text-sm text-[#828282]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyLink from '~/components/CompanyLink.vue';
import SectionHome from '~/components/SectionHome.vue';
import { TIMELINES } from '~/utils/data';
</script>
