<template>
  <div class="w-full relative">
    <div
      class="w-full h-[350px] absolute top-0 left-0 z-0"
      style="background-image: url('/images/background-top.svg')"
    />
    <div class="w-full bg-cover bg-no-repeat px-96 pt-8 z-10 relative min-h-[70vh]">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './layouts/footer/Footer.vue';
import Header from './layouts/header/Header.vue';
</script>
