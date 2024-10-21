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

      <div v-if="isLoading">
        <ProjectLoading :num-of-items="6" />
      </div>

      <div v-if="error" class="mt-16">
        <ErrorScreen />
      </div>

      <div v-if="projectList.length === 0" class="mt-16">
        <EmptyScreen />
      </div>

      <div v-else class="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-7 gap-y-5">
        <div v-for="item in projectList" :key="item.id" class="relative">
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

import { EmptyScreen, ErrorScreen } from '~/components/effect-screen';
import { ProjectLoading } from '~/components/project';
import SectionPage from '~/components/SectionPage.vue';
import type { Project } from '~/types/project.type';

const technologies = ['ReactJS', 'Angular', 'VueJS', 'NextJS', 'NuxtJS', 'Typescript', 'React Native', 'ElectronJS'];
const selected = ref([]);

const { apiDataCenter } = useRuntimeConfig().public;
const { data, status, error, refresh } = await useFetch<Project[]>(`${apiDataCenter}/api/projects`, {
  // query: { param1, param2: 'value2' }
});

const isLoading = !status.value;
const projectList = computed(() => data.value || []);

watch(selected, async (newValue) => {
  await nextTick();
  console.log('ducnh selected', newValue);
});
</script>
