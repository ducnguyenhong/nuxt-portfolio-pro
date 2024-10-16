<template>
  <div class="mt-12">
    <h1 class="mb-4 text-[#4A576F] opacity-40 uppercase font-extrabold text-[13px] tracking-[3px]">Skills</h1>

    <div class="flex flex-wrap gap-4">
      <div
        v-for="item in BASIC"
        :key="item.name"
        class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#f2f2f2] hover:scale-105 duration-300"
      >
        <img :src="item.icon" :alt="item.name" :title="item.name" class="w-6 h-6 object-contain" />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-4">
      <div
        v-for="item in REACTJS"
        :key="item.name"
        class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#f2f2f2] hover:scale-105 duration-300"
      >
        <img :src="item.icon" :alt="item.name" :title="item.name" class="w-6 h-6 object-contain" />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-4">
      <div
        v-for="item in VUEJS"
        :key="item.name"
        class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#f2f2f2] hover:scale-105 duration-300"
      >
        <img :src="item.icon" :alt="item.name" :title="item.name" class="w-6 h-6 object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
const BASIC = [
  {
    name: 'HTML',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
  },
  {
    name: 'Javascript',
    icon: 'https://skillforge.com/wp-content/uploads/2020/10/javascript.png'
  },
  {
    name: 'Typescript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
  }
];

const REACTJS = [
  {
    name: 'ReactJS',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256'
  },
  {
    name: 'NextJS',
    icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
  },
  {
    name: 'VueJS',
    icon: 'https://www.golden-team.org/static/services/vuejs.webp'
  },
  {
    name: 'NuxtJS',
    icon: 'https://static-00.iconduck.com/assets.00/nuxtjs-icon-2048x1372-xn6c49j2.png'
  }
];

const VUEJS = [
  {
    name: 'VueJS',
    icon: 'https://www.golden-team.org/static/services/vuejs.webp'
  },
  {
    name: 'NuxtJS',
    icon: 'https://static-00.iconduck.com/assets.00/nuxtjs-icon-2048x1372-xn6c49j2.png'
  }
];
</script>
