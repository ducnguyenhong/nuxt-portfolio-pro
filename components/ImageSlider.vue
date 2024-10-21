<template>
  <div class="flex flex-col md:flex-row items-center gap-10 md:gap-5 overflow-x-auto">
    <div v-for="(img, index) in images" :key="index" class="flex flex-1 w-full">
      <button type="button" @click="onShowImage(index)" class="w-full">
        <img :src="img" :alt="IMAGE_ALT" class="w-full h-48 md:h-36 rounded-lg object-cover border border-[#e6e6e6]" />
      </button>
    </div>
  </div>

  <UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-6xl' }">
    <div class="p-5">
      <img :src="currentImage" :alt="IMAGE_ALT" class="w-full h-auto rounded-md object-cover" />
    </div>
  </UModal>
</template>

<script lang="ts" setup>
import { IMAGE_ALT } from '~/utils/const';

const props = defineProps<{ images: string[] }>();
const { images } = props;

const isOpen = ref<boolean>(false);
const currentIndex = ref<number>(0);

const onShowImage = (index: number) => {
  isOpen.value = true;
  currentIndex.value = index;
};

const currentImage = computed(() => images[currentIndex.value]);
</script>
