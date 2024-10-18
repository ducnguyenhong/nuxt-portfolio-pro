<template>
  <div class="mt-14">
    <SectionPage title="Projects" content="All the projects I've worked on are here. You can filter by technology." />

    <div class="mt-20">
      <div>
        <USelectMenu size="lg" v-model="selected" :options="technologies" multiple>
          <template #label>
            <span v-if="selected.length" class="truncate text-[15px]">{{ selected.join(', ') }}</span>
            <span v-else class="text-[15px]">Select technology...</span>
          </template>
        </USelectMenu>
      </div>

      <div class="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-7 gap-y-5">
        <div v-for="item in PROJECTS" :key="item.name" class="relative">
          <ProjectItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projects | Nguyễn Hồng Đức - Portfolio',
  ogTitle: 'Projects | Nguyễn Hồng Đức - Portfolio',
  description: 'Projects | Nguyễn Hồng Đức - Portfolio',
  ogDescription: 'Projects | Nguyễn Hồng Đức - Portfolio',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import SectionPage from '~/components/SectionPage.vue';

const technologies = ['ReactJS', 'Angular', 'VueJS', 'NextJS', 'NuxtJS', 'Typescript', 'React Native', 'ElectronJS'];
const selected = ref([]);

watch(selected, async (newValue) => {
  await nextTick();
  console.log('ducnh selected', newValue);
});
</script>
