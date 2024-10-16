<template>
  <Intro />
  <TechInfo />
  <Skills />
</template>

<script setup>
useSeoMeta({
  title: 'Nguyễn Hồng Đức Portfolio',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import Intro from './Intro.vue';
import TechInfo from './TechInfo.vue';
import Skills from './Skills.vue';
</script>
