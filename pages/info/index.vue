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
            'relative flex flex-col w-80 pt-5 border-purple-300',
            index % 2 === 0 ? '-translate-x-1/2 items-end border-r -mr-[2px] ' : 'translate-x-1/2 items-start border-l',
            index === INFO_LIST.length - 1 ? 'pb-16' : 'pb-5'
          ]"
        >
          <div class="border-b relative border-purple-300">
            <p
              :class="[
                'text-[12px] text-[#a6a6a6] tracking-[0.5px] px-8 relative top-4',
                index % 2 === 0 ? 'text-right' : undefined
              ]"
            >
              {{ item.label }}
            </p>
            <div class="flex items-center gap-2 relative -bottom-7 px-8 group">
              <button
                v-if="index % 2 === 0"
                type="button"
                title="Copy"
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200"
              >
                <UIcon name="i-material-symbols-content-copy-outline-rounded" class="w-4 h-4 text-[#828282]" />
              </button>
              <p class="font-semibold text-[15px] text-[#4f4f4f]">
                {{ item.value }}
              </p>
              <button
                v-if="index % 2 !== 0"
                type="button"
                title="Copy"
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200"
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
        class="items-center flex gap-2 bg-gradient-to-r from-[#902ce1] to-[#fe2497] rounded-xl px-5 py-2.5 hover:from-[#fe2497] hover:to-[#fe2497] duration-300"
      >
        <UIcon name="i-material-symbols-download-2-rounded" class="w-4 h-4 text-[#FFF]" />
        <span class="text-sm text-[#FFF]">Download CV</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Information | Nguyễn Hồng Đức - Portfolio',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
});

import SectionPage from '~/components/SectionPage.vue';

const INFO_LIST = [
  {
    label: 'Full name',
    value: 'Nguyen Hong Duc'
  },
  {
    label: 'Date of birth',
    value: '11/12/1999'
  },
  {
    label: 'Occupation',
    value: 'Front-End Engineer'
  },
  {
    label: 'Address',
    value: 'Cau Giay, Ha Noi'
  },
  {
    label: 'Phone',
    value: '0389755202',
    href: 'tel:0389755202'
  },
  {
    label: 'Email',
    value: 'nguyenhongduc.work@gmail.com',
    href: 'mailto:nguyenhongduc.work@gmail.com'
  }
];
</script>
