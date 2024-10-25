<template>
  <div class="mt-14">
    <SectionPage :title="name" :content="description" />

    <div class="mt-20">
      <div class="mt-16">
        <div v-html="htmlContent" class="nuxt-html-content dark:text-[#ccc]" />
        <div class="mt-10" v-if="!!demoImages.length">
          <ImageSlider :images="demoImages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageSlider from '~/components/ImageSlider.vue';
import { WEBSITE_AUTHOR, WEBSITE_DESCRIPTION, WEBSITE_IMAGE, WEBSITE_KEYWORDS, WEBSITE_URL } from '~/utils/const';
import { PROJECT_LIST } from '~/utils/data-project';

const route = useRoute();
const id = route.params.id;
const projectDetail = PROJECT_LIST.find((i) => i.id == id);
const { name = '', content, description, demoImages = [] } = projectDetail || {};
const htmlContent = content;

useHead({
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức',
        url: 'https://nguyenhongduc.net'
      }
    }
  ]
});

useSeoMeta({
  title: `${name} | Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức`,

  meta: [
    { name: 'description', content: WEBSITE_DESCRIPTION },
    { name: 'keywords', content: WEBSITE_KEYWORDS },
    { name: 'author', content: WEBSITE_AUTHOR },
    { name: 'type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'image', content: WEBSITE_IMAGE },
    {
      name: 'site_name',
      content: `${name} | Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức`
    },
    { name: 'url', content: WEBSITE_URL },

    // Open Graph tags (dùng cho Facebook, LinkedIn)
    {
      name: 'og:title',
      content: `${name} | Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức`
    },
    { name: 'og:description', content: WEBSITE_DESCRIPTION },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: WEBSITE_URL },
    { name: 'og:image', content: WEBSITE_IMAGE },
    {
      name: 'og:site_name',
      content: `${name} | Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức`
    },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: `${name} | Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức`
    },
    { name: 'twitter:description', content: WEBSITE_DESCRIPTION },
    { name: 'twitter:image', content: WEBSITE_IMAGE },
    { name: 'twitter:url', content: WEBSITE_URL }
  ],

  link: [
    { rel: 'canonical', href: WEBSITE_URL }, // Đường dẫn chính thức của trang hiện tại
    { rel: 'icon', href: '/favicon.ico' }, // Đường dẫn tới favicon
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' } // Icon dành cho thiết bị Apple
  ],

  // Điều chỉnh language của trang (nếu có)
  htmlAttrs: {
    lang: 'vi',
    dir: 'ltr' // Hướng văn bản, có thể là 'rtl' cho ngôn ngữ từ phải sang trái
  }
});
</script>
