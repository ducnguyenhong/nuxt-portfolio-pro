<template>
  <header class="h-[56px] px-5 flex items-center bg-white bg-opacity-20 rounded-lg">
    <div class="flex flex-1 gap-8 items-center">
      <NuxtLink to="/">
        <div class="flex items-center gap-1.5 hover:animate-shake">
          <img src="/images/logo.webp" class="w-6 h-6 object-cover" alt="Logo - Nguyễn Hồng Đức Portfolio" />
          <h1 class="text-lg font-bold">Portfolio</h1>
        </div>
      </NuxtLink>

      <div>
        <Menu />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="https://facebook.com/ducnh99" target="_blank" title="Facebook">
        <UIcon name="i-mdi-facebook" class="w-5 h-5 text-[#666666] hover:text-[#262626] duration-300 hover:scale-110" />
      </NuxtLink>

      <NuxtLink to="https://linkedin.com/in/ducnh99" target="_blank" title="Linkedin">
        <UIcon name="i-mdi-linkedin" class="w-5 h-5 text-[#666666] hover:text-[#262626] duration-300 hover:scale-110" />
      </NuxtLink>

      <NuxtLink to="https://github.com/ducnguyenhong" target="_blank" title="Github">
        <UIcon name="i-mdi-github" class="w-5 h-5 text-[#666666] hover:text-[#262626] duration-300 hover:scale-110" />
      </NuxtLink>

      <button type="button" title="Dark mode">
        <UIcon
          name="i-line-md-sunny-filled-loop-to-moon-filled-loop-transition"
          class="w-5 h-5 text-[#666666] hover:text-[#262626] duration-300 hover:scale-110"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
import Menu from './Menu.vue';
</script>
