<template>
  <ul class="flex items-center gap-8">
    <li v-for="item in MENU_LIST" :key="item.route">
      <NuxtLink :to="item.route">
        <div class="group flex flex-col items-center mt-[3px]">
          <p class="font-medium dark:text-[#e6e6e6]">
            {{ item.label }}
          </p>
          <div
            class="w-[2px] h-[1px] opacity-0 rounded-full bg-gradient-to-r from-[#902ce1] to-[#fe2497] lg:group-hover:opacity-100 lg:group-hover:w-full duration-300"
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
    label: 'Projects',
    route: '/projects'
  }
];
</script>
