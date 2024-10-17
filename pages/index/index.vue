<template>
  <Intro />
  <TechInfo />
  <Skills />
  <Experience />
  <Projects />
  <News />
</template>

<script setup>
useSeoMeta({
  title: 'Nguyen Hong Duc Portfolio',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import Experience from './Experience.vue';
import Intro from './Intro.vue';
import News from './News.vue';
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import TechInfo from './TechInfo.vue';
</script>
