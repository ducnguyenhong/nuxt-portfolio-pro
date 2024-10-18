<template>
  <div class="mt-16">
    <SectionHome title="FAQ" />

    <div>
      <UAccordion multiple :items="FAQS" :ui="{ wrapper: 'flex flex-col w-full' }">
        <template #default="{ item, _, open }">
          <UButton
            color="black"
            variant="ghost"
            class="border-b border-gray-200 dark:border-gray-700 px-0"
            :ui="{ rounded: 'rounded-none' }"
          >
            <p class="text-[15px] font-semibold text-[#070707] py-2">{{ item.label }}</p>

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-180']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FAQS } from '~/utils/data';
</script>
