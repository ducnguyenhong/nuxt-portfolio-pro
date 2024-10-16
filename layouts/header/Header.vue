<template>
  <header class="bg-transparent h-[56px] px-5 flex items-center bg-white bg-opacity-30 rounded-lg">
    <div class="flex flex-1 gap-8 items-center">
      <NuxtLink to="/">
        <div class="flex items-center gap-2">
          <h1 class="text-lg font-bold">Portfolio</h1>
        </div>
      </NuxtLink>

      <div>
        <Menu />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="/">
        <UIcon name="i-mdi-facebook" class="w-5 h-5" />
      </NuxtLink>

      <NuxtLink to="/">
        <UIcon name="i-mdi-linkedin" class="w-5 h-5" />
      </NuxtLink>

      <NuxtLink to="/">
        <UIcon name="i-mdi-github" class="w-5 h-5" />
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import Menu from './Menu.vue';
</script>
