<template>
  <div class="mt-16">
    <SectionHome title="Skill" />

    <div class="flex items-center gap-6 mb-6 overflow-x-auto">
      <div v-for="item in TABS" :key="item.title">
        <button
          type="button"
          @click="setTabActive(item.value)"
          :class="[
            'border-b text-[16px] whitespace-nowrap',
            item.value === tabActive
              ? 'border-purple-800 text-purple-800 dark:text-purple-500 dark:border-purple-500 font-semibold'
              : 'border-white dark:border-[#121114] dark:text-[#ccc]'
          ]"
        >
          {{ item.title }}
        </button>
      </div>
    </div>

    <div class="flex flex-wrap gap-4">
      <div
        v-for="item in skillList"
        :key="item.name"
        class="zoom-in-skill flex flex-col justify-center items-center gap-1"
      >
        <div
          class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#f2f2f2] dark:bg-[#4f4f4f] dark:border-[#828282] lg:hover:scale-105 duration-200"
        >
          <NuxtImg :src="item.icon" :alt="item.iconAlt" :title="item.name" class="w-6 h-6 object-contain" />
        </div>

        <p class="text-center text-[11px] text-[#828282] dark:text-[#ccc]">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHome from '~/components/SectionHome.vue';
import { SKILLS } from '../../utils/data';

const tabActive = ref('WEBSITE');

const setTabActive = (newValue: string) => {
  tabActive.value = newValue;
};

const skillList = computed(() => SKILLS.filter((i) => i.type.includes(tabActive.value)));

const TABS = [
  {
    title: 'Website',
    value: 'WEBSITE'
  },
  {
    title: 'Mobile & Desktop',
    value: 'MOBILE_DESKTOP'
  },
  {
    title: 'Back-End',
    value: 'BACKEND'
  },
  {
    title: 'Deployment',
    value: 'DEPLOY'
  },
  {
    title: 'Other',
    value: 'OTHER'
  }
];
</script>
