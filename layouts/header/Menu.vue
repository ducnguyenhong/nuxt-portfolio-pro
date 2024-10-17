<template>
  <ul class="flex items-center gap-8">
    <li v-for="item in MENU_LIST" :key="item.route">
      <NuxtLink :to="item.route">
        <div class="group flex flex-col items-center mt-[3px]">
          <p class="font-medium">
            {{ item.label }}
          </p>
          <div
            class="w-[2px] h-[1px] opacity-0 rounded-full bg-gradient-to-r from-[#902ce1] to-[#fe2497] group-hover:opacity-100 group-hover:w-full duration-300"
          />
        </div>
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
