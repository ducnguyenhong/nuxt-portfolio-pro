<template>
  <div class="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-7 gap-y-5">
    <div v-for="item in arrayLoading" :key="`project_loading_${item}`" class="relative">
      <NuxtLink to="/">
        <div class="w-full h-40 overflow-hidden rounded-lg border border-[#e6e6e6]">
          <USkeleton class="w-full h-40" :ui="{ rounded: 'rounded-lg' }" />
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div class="flex items-center gap-1.5 mt-2">
          <USkeleton class="h-5 w-5" :ui="{ rounded: 'rounded-full' }" />
          <USkeleton class="h-4 w-[150px]" />
        </div>
      </NuxtLink>
      <div class="mt-0.5">
        <USkeleton class="h-4 w-[150px]" />
      </div>

      <div class="mt-0.5">
        <USkeleton class="h-4 w-[150px]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ numOfItems: number }>();
const { numOfItems } = props;
const arrayLoading = Array.from(Array(numOfItems).keys());
</script>
