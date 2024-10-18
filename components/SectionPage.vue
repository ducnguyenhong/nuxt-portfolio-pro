<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="w-fit text-2xl font-bold bg-gradient-to-r from-[#902ce1] to-[#fe2497] text-transparent bg-clip-text">
      {{ title }}
    </h1>
    <p v-if="!!content" class="text-center text-sm px-4 lg:px-40 text-[#828282] mt-3">{{ content }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SectionPage',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String
    }
  }
};
</script>
