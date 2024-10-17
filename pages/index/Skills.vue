<template>
  <div class="mt-14">
    <h1 class="mb-4 text-[#4A576F] opacity-40 uppercase font-extrabold text-[13px] tracking-[3px]">Skills</h1>

    <div class="flex items-center gap-6 mb-4">
      <div v-for="item in TABS" :key="item.title">
        <button
          type="button"
          @click="setTabActive(item.value)"
          :class="[
            'border-b text-[16px]',
            item.value === tabActive ? 'border-purple-800 text-purple-800 font-semibold' : 'border-white'
          ]"
        >
          {{ item.title }}
        </button>
      </div>
    </div>

    <div class="flex flex-wrap gap-6">
      <div v-for="item in skillList" :key="item.name" class="flex flex-col justify-center items-center gap-1">
        <div
          class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#f2f2f2] hover:scale-105 duration-300"
        >
          <img :src="item.icon" :alt="item.name" :title="item.name" class="w-6 h-6 object-contain" />
        </div>

        <p class="text-center text-[11px] text-[#828282]">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SKILLS } from '../../utils/const';

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
