<template>
  <Intro />
  <TechInfo />
  <Skills />
  <Experience />
  <TopProject />
  <FAQ />
  <Sponsor />
</template>

<script setup>
useSeoMeta({
  title: 'Nguyễn Hồng Đức - Portfolio',
  ogTitle: 'Nguyễn Hồng Đức - Portfolio',
  description: 'Nguyễn Hồng Đức - Portfolio',
  ogDescription: 'Nguyễn Hồng Đức - Portfolio',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import Experience from './Experience.vue';
import FAQ from './FAQ.vue';
import Intro from './Intro.vue';
import Skills from './Skills.vue';
import Sponsor from './Sponsor.vue';
import TechInfo from './TechInfo.vue';
import TopProject from './TopProject.vue';
</script>
