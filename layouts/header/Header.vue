<template>
  <header
    class="h-[56px] md:px-5 flex items-center bg-white dark:bg-[#1C162F] bg-opacity-20 dark:bg-opacity-20 rounded-lg"
  >
    <div class="flex flex-1 gap-8 items-center">
      <NuxtLink to="/">
        <div class="flex items-center gap-1.5 lg:hover:animate-shake">
          <img src="/images/logo.webp" class="w-6 h-6 object-cover" alt="Logo - Nguyễn Hồng Đức Portfolio" />
          <h1 class="text-lg font-bold dark:text-[#e6e6e6]">Portfolio</h1>
        </div>
      </NuxtLink>

      <div class="hidden md:block">
        <Menu />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="https://facebook.com/ducnh99" target="_blank" title="Facebook">
        <UIcon
          name="i-mdi-facebook"
          class="w-5 h-5 text-[#666666] dark:text-[#b9b9b9] lg:hover:text-[#262626] dark:lg:hover:text-[#f2f2f2] duration-300 lg:hover:scale-110"
        />
      </NuxtLink>

      <NuxtLink to="https://linkedin.com/in/ducnh99" target="_blank" title="Linkedin">
        <UIcon
          name="i-mdi-linkedin"
          class="w-5 h-5 text-[#666666] dark:text-[#b9b9b9] lg:hover:text-[#262626] dark:lg:hover:text-[#f2f2f2] duration-300 lg:hover:scale-110"
        />
      </NuxtLink>

      <NuxtLink to="https://github.com/ducnguyenhong" target="_blank" title="Github">
        <UIcon
          name="i-mdi-github"
          class="w-5 h-5 text-[#666666] dark:text-[#b9b9b9] lg:hover:text-[#262626] dark:lg:hover:text-[#f2f2f2] duration-300 lg:hover:scale-110"
        />
      </NuxtLink>

      <button type="button" title="Change mode" @click="toggleDarkMode">
        <UIcon
          :name="
            isDarkMode
              ? 'i-material-symbols-sunny-rounded'
              : 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition'
          "
          class="w-5 h-5 text-[#666666] dark:text-[#b9b9b9] lg:hover:text-[#262626] dark:lg:hover:text-[#f2f2f2] duration-300 lg:hover:scale-110"
        />
      </button>

      <UPopover :popper="{ placement: 'top-end' }">
        <button type="button" title="Menu" class="md:hidden">
          <UIcon name="i-solar-hamburger-menu-linear" class="w-6 h-6 text-[#262626] dark:text-[#b9b9b9]" />
        </button>

        <template #panel>
          <div class="px-5 py-3">
            <Menu />
          </div>
        </template>
      </UPopover>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDarkModeStore } from '~/stores/dark-mode';
import Menu from './Menu.vue';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
const { toggleDarkMode } = darkModeStore;
</script>
