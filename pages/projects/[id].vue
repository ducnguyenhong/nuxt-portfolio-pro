<template>
  <div class="mt-14">
    <SectionPage :title="name" :content="description" />

    <div class="mt-20">
      <div class="mt-16">
        <div v-html="htmlContent" class="nuxt-html-content" />
        <div class="mt-10" v-if="!!demoImages.length">
          <ImageSlider :images="demoImages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DOMPurify from 'isomorphic-dompurify';
import ImageSlider from '~/components/ImageSlider.vue';
import { PROJECT_LIST } from '~/utils/data-project';

const route = useRoute();
const id = route.params.id;
const projectDetail = PROJECT_LIST.find((i) => i.id == id);

const { name = '', content, description, demoImages = [] } = projectDetail || {};

const htmlContent = DOMPurify.sanitize(content || '');

useSeoMeta({
  title: `${name} | Nguyễn Hồng Đức - Portfolio`,
  ogTitle: `${name} | Nguyễn Hồng Đức - Portfolio`,
  description: `${name} Nguyễn Hồng Đức - Portfolio`,
  ogDescription: `${name} Nguyễn Hồng Đức - Portfolio`,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});
</script>
