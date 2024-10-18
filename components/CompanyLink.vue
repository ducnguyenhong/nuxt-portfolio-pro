<template>
  <a :href="link" target="_blank" class="font-bold group lg:hover:text-purple-600 duration-200 block w-fit">
    {{ content }}
    <UIcon
      name="i-material-symbols-arrow-outward-rounded"
      class="w-[12px] h-[12px] relative -top-0.5 text-purple-800 group-hover:text-purple-600 duration-200"
    />
  </a>
</template>

<script lang="ts">
export default {
  name: 'CompanyLink',
  props: {
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>
