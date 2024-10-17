<template>
  <div class="mt-16">
    <h1 class="mb-4 text-[#4A576F] opacity-40 uppercase font-extrabold text-[13px] tracking-[3px]">Projects</h1>
  </div>

  <div>
    <div class="grid grid-cols-3 gap-6">
      <div v-for="item in PROJECTS" :key="item.name">
        <img :src="item.thumbnail" class="w-full h-40 object-cover rounded-lg" />
        <p class="font-bold mt-2">{{ item.name }}</p>
        <p class="text-[#828282] mt-0.5 text-sm">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const PROJECTS = [
  {
    name: 'Stockbook',
    description: 'Stockbook',
    demo: 'https://stockbook.vn',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Knowledge Management System',
    description: 'Knowledge Management System (KMS)',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Homefood',
    description: 'Homefood',
    demo: 'https://homefood.com.vn',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Stormik',
    description: 'Stockbook',
    demo: 'https://stockbook.vn',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: '84.GO',
    description: 'Knowledge Management System (KMS)',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  },
  {
    name: 'Homefood2',
    description: 'Homefood',
    demo: 'https://homefood.com.vn',
    thumbnail: 'https://cdn.stockbook.vn/static/images/ReviewImage.jpg',
    technologies: ['ReactJS', 'ReactNative'],
    types: 'Company project'
  }
];
</script>
