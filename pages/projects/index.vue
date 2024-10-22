<template>
  <div class="mt-14">
    <SectionPage title="Projects" content="All the projects I've worked on are here. You can filter by technology." />

    <div>
      <!-- <div>
        <USelectMenu size="lg" v-model="selected" :options="technologies" multiple>
          <template #label>
            <span v-if="selected.length" class="truncate text-[15px]">{{ selected.join(', ') }}</span>
            <span v-else class="text-[15px]">Select technology...</span>
          </template>
        </USelectMenu>
      </div> -->

      <div class="mt-16 grid grid-cols-2 lg:grid-cols-2 gap-x-5 lg:gap-x-7 gap-y-7">
        <div v-for="item in projectList" :key="item.id" class="relative">
          <ProjectItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionPage from '~/components/SectionPage.vue';
import { PROJECT_LIST } from '~/utils/data-project';

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
  title: WEBSITE_PROJECT_TITLE,

  meta: [
    { name: 'description', content: WEBSITE_DESCRIPTION },
    { name: 'keywords', content: WEBSITE_KEYWORDS },
    { name: 'author', content: WEBSITE_AUTHOR },
    { name: 'type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'image', content: WEBSITE_IMAGE },
    { name: 'site_name', content: WEBSITE_PROJECT_TITLE },
    { name: 'url', content: WEBSITE_URL },

    // Open Graph tags (dùng cho Facebook, LinkedIn)
    { name: 'og:title', content: WEBSITE_PROJECT_TITLE },
    { name: 'og:description', content: WEBSITE_DESCRIPTION },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: WEBSITE_URL },
    { name: 'og:image', content: WEBSITE_IMAGE },
    { name: 'og:site_name', content: WEBSITE_PROJECT_TITLE },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: WEBSITE_PROJECT_TITLE },
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

const technologies = ['ReactJS', 'Angular', 'VueJS', 'NextJS', 'NuxtJS', 'Typescript', 'React Native', 'ElectronJS'];
const selected = ref([]);

const projectList = PROJECT_LIST;

watch(selected, async (newValue) => {
  await nextTick();
  console.log('ducnh selected', newValue);
});
</script>
