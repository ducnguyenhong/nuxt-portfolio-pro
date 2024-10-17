<template>
  <h1 class="mb-4 text-[#4A576F] opacity-40 uppercase font-extrabold text-[13px] tracking-[3px]">{{ title }}</h1>
</template>

<script lang="ts">
export default {
  name: 'SectionHome',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
