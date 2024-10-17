<template>
  <header class="h-[56px] px-5 flex items-center bg-white bg-opacity-20 rounded-lg">
    <div class="flex flex-1 gap-8 items-center">
      <NuxtLink to="/">
        <div class="flex items-center gap-1.5">
          <img src="/images/logo.png" class="w-6 h-6 object-cover" />
          <h1 class="text-lg font-bold">Portfolio</h1>
        </div>
      </NuxtLink>

      <div>
        <Menu />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="/">
        <UIcon name="i-mdi-facebook" class="w-5 h-5 text-gray-600" />
      </NuxtLink>

      <NuxtLink to="/">
        <UIcon name="i-mdi-linkedin" class="w-5 h-5 text-gray-600" />
      </NuxtLink>

      <NuxtLink to="/">
        <UIcon name="i-mdi-github" class="w-5 h-5 text-gray-600" />
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import Menu from './Menu.vue';
</script>
