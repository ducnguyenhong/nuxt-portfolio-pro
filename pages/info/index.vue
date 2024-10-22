<template>
  <div class="mt-14">
    <SectionPage
      title="Information"
      content="Below are my personal information, and you can contact me through any of the following methods. You can also download my personal CV for the job."
    />

    <div class="mt-20 flex flex-col items-center">
      <div v-for="(item, index) in INFO_LIST" :key="item.label" class="gap-3 flex items-center">
        <div
          :class="[
            'relative flex flex-col w-48 md:w-80 pt-5 border-purple-300',
            index % 2 === 0 ? '-translate-x-1/2 items-end border-r -mr-[2px] ' : 'translate-x-1/2 items-start border-l',
            index === INFO_LIST.length - 1 ? 'pb-16' : 'pb-5'
          ]"
        >
          <div class="border-b relative border-purple-300">
            <p
              :class="[
                'text-[12px] text-[#a6a6a6] dark:text-[#b9b9b9] tracking-[0.5px] px-3 md:px-8 relative top-4',
                index % 2 === 0 ? 'text-right' : undefined
              ]"
            >
              <UIcon :name="item.icon" class="w-4 h-4 text-[#828282] relative top-[3px]" />
              {{ item.label }}
            </p>
            <div class="flex items-center gap-2 relative -bottom-7 px-3 md:px-8 group">
              <button
                v-if="index % 2 === 0"
                type="button"
                title="Copy"
                class="opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible duration-200 hidden md:block"
                @click="onCopyText(item.value)"
              >
                <UIcon name="i-material-symbols-content-copy-outline-rounded" class="w-4 h-4 text-[#828282]" />
              </button>
              <p class="font-semibold text-[15px] text-[#4f4f4f] dark:text-[#ccc] break-all md:break-normal">
                {{ item.value }}
              </p>
              <button
                v-if="index % 2 !== 0"
                type="button"
                title="Copy"
                class="opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible duration-200 hidden md:block"
                @click="onCopyText(item.value)"
              >
                <UIcon name="i-material-symbols-content-copy-outline-rounded" class="w-4 h-4 text-[#828282]" />
              </button>
            </div>
            <div
              :class="[
                'flex justify-center items-center w-[18px] h-[18px] bg-gradient-to-r from-[#902ce1] to-[#fe2497] rounded-full absolute -bottom-[10px]',
                index % 2 === 0 ? '-right-[10px]' : '-left-[10px]'
              ]"
            >
              <div class="w-[10px] h-[10px] rounded-full bg-[#FFF]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-20 mb-16">
      <a
        href="https://nguyenhongduc.net/[Front-End] Nguyễn Hồng Đức.pdf"
        target="_blank"
        class="items-center flex gap-2 bg-gradient-to-r from-[#902ce1] to-[#fe2497] rounded-xl px-5 py-2.5 lg:hover:from-[#fe2497] lg:hover:to-[#fe2497] duration-300"
      >
        <UIcon name="i-material-symbols-download-2-rounded" class="w-4 h-4 text-[#FFF]" />
        <span class="text-sm text-[#FFF]">Download CV</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionPage from '~/components/SectionPage.vue';
import {
  WEBSITE_KEYWORDS,
  WEBSITE_DESCRIPTION,
  WEBSITE_AUTHOR,
  WEBSITE_INFO_TITLE,
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
  title: WEBSITE_INFO_TITLE,

  meta: [
    { name: 'description', content: WEBSITE_DESCRIPTION },
    { name: 'keywords', content: WEBSITE_KEYWORDS },
    { name: 'author', content: WEBSITE_AUTHOR },
    { name: 'type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'image', content: WEBSITE_IMAGE },
    { name: 'site_name', content: WEBSITE_INFO_TITLE },
    { name: 'url', content: WEBSITE_URL },

    // Open Graph tags (dùng cho Facebook, LinkedIn)
    { name: 'og:title', content: WEBSITE_INFO_TITLE },
    { name: 'og:description', content: WEBSITE_DESCRIPTION },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: WEBSITE_URL },
    { name: 'og:image', content: WEBSITE_IMAGE },
    { name: 'og:site_name', content: WEBSITE_INFO_TITLE },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: WEBSITE_INFO_TITLE },
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

const INFO_LIST = [
  {
    label: 'Full name',
    value: 'Nguyen Hong Duc',
    icon: 'i-material-symbols-account-circle-outline'
  },
  {
    label: 'Date of birth',
    value: '11/12/1999',
    icon: 'i-hugeicons-birthday-cake'
  },
  {
    label: 'Occupation',
    value: 'Front-End Engineer',
    icon: 'i-material-symbols-work-outline'
  },
  {
    label: 'Address',
    value: 'Cau Giay, Ha Noi',
    icon: 'i-material-symbols-light-location-on-outline'
  },
  {
    label: 'Phone',
    value: '0389755202',
    href: 'tel:0389755202',
    icon: 'i-material-symbols-call-outline'
  },
  {
    label: 'Email',
    value: 'nguyenhongduc.work@gmail.com',
    href: 'mailto:nguyenhongduc.work@gmail.com',
    icon: 'i-material-symbols-mail-outline-rounded'
  }
];

const onCopyText = (text: string) => {
  navigator.clipboard.writeText(text);
};
</script>
