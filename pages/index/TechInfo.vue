<template>
  <div class="mt-14 p-3.5 pb-3 rounded-md border border-dashed border-[#e6e6e6]">
    <div class="flex items-start justify-between">
      <div class="flex flex-1 items-center gap-3">
        <div
          class="flex items-center text-center justify-center rounded-lg w-9 h-5 border border-purple-700 text-purple-700 text-[11px]"
        >
          New
        </div>
        <span class="text-[#4A576F] text-sm">This website is using VueJS</span>
        <img
          src="https://www.golden-team.org/static/services/vuejs.webp"
          alt="VueJS"
          class="w-3.5 h-3.5 object-cover"
        />
        <button type="button" class="text-green-600 text-sm underline">Why Vue?</button>
      </div>

      <div>
        <button type="button" title="Hide">
          <UIcon
            name="i-material-symbols-light-close-rounded"
            class="w-5 h-5 text-gray-400 hover:text-gray-500 duration-w00"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const TECHNOLOGY_LIST = [
  {
    title: 'NuxtJS',
    logo: 'https://static-00.iconduck.com/assets.00/nuxtjs-icon-2048x1372-xn6c49j2.png'
  },
  {
    title: 'VueJS',
    logo: 'https://www.golden-team.org/static/services/vuejs.webp'
  },
  {
    title: 'TailwindCSS',
    logo: 'https://gyazo.com/d779a2f7951457023e090625aa510cc3/max_size/1000'
  },
  {
    title: 'Figma',
    logo: 'https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png'
  }
];
</script>
