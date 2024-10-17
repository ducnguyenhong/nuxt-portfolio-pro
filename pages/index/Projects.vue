<template>
  <div class="mt-16">
    <SectionHome title="Projects" />
  </div>

  <div>
    <div class="grid grid-cols-3 gap-6">
      <div v-for="item in PROJECTS" :key="item.name">
        <img :src="item.thumbnail" class="w-full h-40 object-cover rounded-lg border border-[#e6e6e6]" />
        <div class="flex items-center gap-1.5 mt-2">
          <img :src="item.logo" class="h-5 w-5 rounded-full object-contain" />
          <p class="font-semibold">{{ item.name }}</p>
        </div>
        <p class="text-[#828282] mt-0.5 text-[13px]">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHome from '~/components/SectionHome.vue';

const PROJECTS = [
  {
    name: 'Stockbook',
    description: 'Stockbook',
    demo: 'https://stockbook.vn',
    thumbnail: 'https://stockbook.vn/metadata/preview.png',
    logo: 'https://play-lh.googleusercontent.com/NXVoMoOZavNqBosdsHFN7yoh5PyL3JypVGwPfhLwo9PZvnl3XqCr59R_PmN6rZOP0Q=w240-h480-rw',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'KMS',
    description: 'Knowledge Management System (KMS)',
    thumbnail: 'https://kms.ivnd.com.vn/_next/image?url=%2Fimages%2Flogo-dstation.png&w=3840&q=100',
    logo: 'https://static.topcv.vn/company_logos/5GGhycAuuNTNYEHlkokJqVqQfm8Mbyru_1658117258____ea0ae68775ac90e6a97e932ac0c48477.png',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Homefood',
    description: 'Homefood',
    demo: 'https://homefood.com.vn',
    thumbnail:
      'https://homefood.com.vn/_next/image?url=https%3A%2F%2Fcms.homefood.com.vn%2Fapi%2Fmedia-service%2Ffiles%2F61052391-a559-492f-a18a-65b0cc97175b.png&w=3840&q=100',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-hMztJ3vJ8U4jXBiucEdLWVt45m_xkaKSA&s',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Stormik',
    description: 'Stockbook',
    demo: 'https://stormik.org',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    logo: 'https://stormik.org/images/logo.png',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: '84.GO',
    description: 'Knowledge Management System (KMS)',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1jAkselt-keVNDk6BXM1CJnL0A_kinoyftdaDd7nic8h5vgAqt1J39KaAyFnUgMo4ao&usqp=CAU',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz4eC9owY_k-VBgMoG4ZVJ3XkLZVc4Hqe9Q&s',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Homefood2',
    description: 'Homefood',
    demo: 'https://homefood.com.vn',
    thumbnail: 'https://mms.img.susercontent.com/aefee07e2521fb8ced6656deb2ee1818',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  }
];
</script>
