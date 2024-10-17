<template>
  <div class="mt-16">
    <h1 class="mb-4 text-[#4A576F] opacity-40 uppercase font-extrabold text-[13px] tracking-[3px]">Experience</h1>

    <div>
      <div class="flex flex-col gap-8">
        <div v-for="item in TIMELINE" :key="item.workplace" class="flex items-start gap-4 relative">
          <div class="h-[70%] w-[1px] bg-[#e6e6e6] absolute top-12 left-4" />
          <div class="w-9 h-9 rounded-full border border-[#F2F2F2] flex items-center justify-center">
            <img :src="item.workplaceLogo" class="w-6 h-6 object-contain" />
          </div>
          <div class="flex flex-col flex-1 gap-2">
            <p class="text-xs text-[#a6a6a6]">{{ item.duration }}</p>
            <p class="font-bold">{{ item.workplace }}</p>
            <p class="text-sm text-[#828282]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const TIMELINE = [
  {
    workplace: 'FPT Software',
    duration: '10/2024 - Now',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, velit vel consequat congue, metus velit pellentesque velit, et sagittis risus neque eu justo.',
    workplaceLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Vndirect Securities Coporation',
    duration: '01/2022 - 09/2024',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, velit vel consequat congue, metus velit pellentesque velit, et sagittis risus neque eu justo.',
    workplaceLogo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-VNDIRECT.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Egroup',
    duration: '06/2020 - 12/2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, velit vel consequat congue, metus velit pellentesque velit, et sagittis risus neque eu justo.',
    workplaceLogo:
      'https://yt3.googleusercontent.com/ytc/AIdro_neHBmE6lLCFeUqpjfJ7mmNqjACJiJdtEWwcmq6Ssc0vQ=s900-c-k-c0x00ffffff-no-rj',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'University of Transport and Communication',
    duration: '09/2017 - 06/2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, velit vel consequat congue, metus velit pellentesque velit, et sagittis risus neque eu justo.',
    workplaceLogo:
      'https://media.licdn.com/dms/image/v2/C4D0BAQHqJ_xgXJkmaA/company-logo_200_200/company-logo_200_200/0/1630568271119?e=2147483647&v=beta&t=QO1tf6gxuJSLawE8ZIqH9QPRPuGbNeSrxF2hNwwtELc',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  }
];
</script>
