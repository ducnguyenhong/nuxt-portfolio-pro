<template>
  <div class="mt-16">
    <SectionHome title="Experience" />

    <div>
      <div class="flex flex-col gap-8">
        <div v-for="item in TIMELINE" :key="item.workplace" class="flex items-start gap-4 relative">
          <div class="h-[70%] w-[1px] bg-[#e6e6e6] absolute top-12 left-4" />
          <div class="w-9 h-9 rounded-full border border-[#F2F2F2] flex items-center justify-center">
            <img :src="item.workplaceLogo" class="w-6 h-6 object-contain" />
          </div>
          <div class="flex flex-col flex-1 gap-2">
            <p class="font-bold">{{ item.workplace }}</p>
            <p class="text-xs text-[#b6b6b6]">{{ item.duration }}</p>
            <p class="text-sm text-[#828282]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHome from '~/components/SectionHome.vue';

const TIMELINE = [
  {
    workplace: 'FPT Software',
    duration: '10/2024 - Now',
    description: 'Participate in developing telecommunications outsourcing projects.',
    workplaceLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Vndirect Securities Corporation',
    duration: '01/2022 - 09/2024',
    description: 'Participate in developing support projects for securities users.',
    workplaceLogo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-VNDIRECT.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Egroup',
    duration: '06/2020 - 12/2021',
    description: 'Participate in developing an online English teaching website system.',
    workplaceLogo:
      'https://yt3.googleusercontent.com/ytc/AIdro_neHBmE6lLCFeUqpjfJ7mmNqjACJiJdtEWwcmq6Ssc0vQ=s900-c-k-c0x00ffffff-no-rj',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'University of Transport and Communications',
    duration: '09/2017 - 06/2021',
    description: 'Studied and graduated in 2021 (IT Engineer).',
    workplaceLogo:
      'https://media.licdn.com/dms/image/v2/C4D0BAQHqJ_xgXJkmaA/company-logo_200_200/company-logo_200_200/0/1630568271119?e=2147483647&v=beta&t=QO1tf6gxuJSLawE8ZIqH9QPRPuGbNeSrxF2hNwwtELc',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  }
];
</script>
