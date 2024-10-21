<template>
  <p
    :class="[
      'absolute top-2 left-2 text-[11px] px-1.5 py-0.5 text-white rounded-md z-10 bg-gradient-to-r',
      getBgColorType(item.type)
    ]"
  >
    {{ item.type }}
  </p>
  <NuxtLink to="/">
    <div class="w-full h-40 overflow-hidden rounded-lg border border-[#e6e6e6]">
      <img
        :src="`${apiDataCenter}${item.thumbnail}`"
        class="w-full h-40 object-cover lg:hover:scale-110 duration-200"
      />
    </div>
  </NuxtLink>
  <NuxtLink to="/">
    <div class="flex items-center gap-1.5 mt-2">
      <img :src="`${apiDataCenter}${item.logo}`" class="h-5 w-5 rounded-full object-contain" />
      <p class="font-semibold">{{ item.name }}</p>
    </div>
  </NuxtLink>
  <p class="text-[#828282] mt-0.5 text-[13px] italic font-light">{{ item.description }}</p>

  <div class="flex items-center gap-2 mt-0.5">
    <p class="text-[#070707] text-[13px]">Platform:</p>
    <div v-for="d in item.platform" :key="d" :title="d" class="mt-1">
      <UIcon :name="getDeviceIcon(d)" class="w-4 h-4 text-[#828282]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/project.type';

const getBgColorType = (type: string) => {
  if (type === 'Company') {
    return 'from-[#278036] to-[#57b366]';
  }
  if (type === 'Personal') {
    return 'from-[#752783] to-[#b763c6]';
  }
  if (type === 'Freelance') {
    return 'from-[#273480] to-[#505fb5]';
  }
  return '';
};

const getDeviceIcon = (device: 'WEBSITE' | 'MOBILE' | 'DESKTOP') => {
  if (device === 'WEBSITE') {
    return 'i-material-symbols-globe';
  }
  if (device === 'MOBILE') {
    return 'i-material-symbols-light-phone-android-rounded';
  }
  if (device === 'DESKTOP') {
    return 'i-mdi-laptop-mac';
  }
  return '';
};

const { apiDataCenter } = useRuntimeConfig().public;

const props = defineProps<{ item: Project }>();

const { item } = props;
</script>
