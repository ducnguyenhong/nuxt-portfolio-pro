<template>
  <a
    :href="link"
    :target="openInNewTab ? '_blank' : undefined"
    class="text-purple-800 group hover:text-purple-600 duration-200"
  >
    {{ content }}
    <UIcon
      name="i-material-symbols-arrow-outward-rounded"
      class="w-[12px] h-[12px] relative -top-0.5 -ml-1 text-purple-800 group-hover:text-purple-600 duration-200"
    />
  </a>
</template>

<script lang="ts">
export default {
  name: 'DiscoveryLink',
  props: {
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    openInNewTab: {
      type: Boolean,
      default: true
    }
  }
};
</script>
