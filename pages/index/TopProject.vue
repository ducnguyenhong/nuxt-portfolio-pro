<template>
  <div class="mt-16">
    <SectionHome title="Top Project" />
  </div>

  <div>
    <div class="grid grid-cols-2 lg:grid-cols-2 gap-x-5 lg:gap-x-7 gap-y-7">
      <div v-for="item in projectList" :key="item.name" class="relative">
        <ProjectItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectItem } from '~/components/project';
import SectionHome from '~/components/SectionHome.vue';
import { PROJECT_LIST } from '~/utils/data-project';

const projectList = PROJECT_LIST.filter((i) => !!i.isTop);
</script>
