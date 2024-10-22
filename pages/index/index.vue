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
import {
  WEBSITE_KEYWORDS,
  WEBSITE_DESCRIPTION,
  WEBSITE_AUTHOR,
  WEBSITE_TITLE,
  WEBSITE_IMAGE,
  WEBSITE_URL
} from '~/utils/const';

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
  title: WEBSITE_TITLE,

  meta: [
    { name: 'description', content: WEBSITE_DESCRIPTION },
    { name: 'keywords', content: WEBSITE_KEYWORDS },
    { name: 'author', content: WEBSITE_AUTHOR },
    { name: 'type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'image', content: WEBSITE_IMAGE },
    { name: 'site_name', content: WEBSITE_TITLE },
    { name: 'url', content: WEBSITE_URL },

    // Open Graph tags (dùng cho Facebook, LinkedIn)
    { name: 'og:title', content: WEBSITE_TITLE },
    { name: 'og:description', content: WEBSITE_DESCRIPTION },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: WEBSITE_URL },
    { name: 'og:image', content: WEBSITE_IMAGE },
    { name: 'og:site_name', content: WEBSITE_TITLE },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: WEBSITE_TITLE },
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

import Experience from './Experience.vue';
import FAQ from './FAQ.vue';
import Intro from './Intro.vue';
import Skills from './Skills.vue';
import Sponsor from './Sponsor.vue';
import TechInfo from './TechInfo.vue';
import TopProject from './TopProject.vue';
</script>
