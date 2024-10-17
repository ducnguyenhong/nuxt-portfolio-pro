<template>
  <Intro />
  <TechInfo />
  <Skills />
  <Experience />
  <Projects />
</template>

<script setup>
useSeoMeta({
  title: 'Nguyễn Hồng Đức - Portfolio',
  ogTitle: 'Nguyễn Hồng Đức - Portfolio',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import Experience from './Experience.vue';
import Intro from './Intro.vue';
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import TechInfo from './TechInfo.vue';
</script>
