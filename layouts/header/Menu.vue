<template>
  <ul class="flex items-center gap-8">
    <li v-for="item in MENU_LIST" :key="item.route">
      <NuxtLink :to="item.route">
        <p class="font-medium">{{ item.label }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const MENU_LIST = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Info',
    route: '/info'
  },
  {
    label: 'Product',
    route: '/product'
  },
  {
    label: 'Tools',
    route: '/4'
  }
];
</script>
