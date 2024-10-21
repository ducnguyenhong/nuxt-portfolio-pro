<template>
  <NuxtLayout>
    <div class="w-full relative">
      <img src="/images/background-top.webp" class="w-full h-[600px] absolute top-0 bg-cover left-0 z-0" />
      <div
        class="w-full bg-cover bg-no-repeat px-5 md:px-8 lg:px-96 2xl:px-[450px] pt-4 md:pt-8 z-10 relative min-h-[80vh]"
      >
        <Header />
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script setup>
import Footer from './layouts/footer/Footer.vue';
import Header from './layouts/header/Header.vue';
</script>
