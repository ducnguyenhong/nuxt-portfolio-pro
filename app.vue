<template>
  <NuxtLayout>
    <div :class="{ dark: isDarkMode }">
      <div class="w-full relative dark:bg-[#121114]">
        <img src="/images/background-top.webp" class="w-full h-[600px] absolute top-0 bg-cover left-0 z-0" />
        <div
          class="w-[92%] md:[w-95%] lg:[w-50%] xl:w-[650px] 2xl:w-[650px] mx-auto bg-cover bg-no-repeat pt-4 md:pt-8 z-10 relative min-h-[80vh]"
        >
          <Header />
          <NuxtPage />
        </div>
        <Footer />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDarkModeStore } from '~/stores/dark-mode';
import Footer from './layouts/footer/Footer.vue';
import Header from './layouts/header/Header.vue';

const darkModeStore = useDarkModeStore();
const { initDarkMode } = darkModeStore;
const { isDarkMode } = storeToRefs(darkModeStore);

onMounted(() => {
  initDarkMode();
});
</script>
