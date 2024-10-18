<template>
  <div class="mt-16">
    <SectionHome title="Projects" />
  </div>

  <div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-7 gap-y-5">
      <div v-for="item in PROJECTS" :key="item.name" class="relative">
        <ProjectItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from '~/components/ProjectItem.vue';
import SectionHome from '~/components/SectionHome.vue';
import { PROJECTS } from '~/utils/data';
</script>
