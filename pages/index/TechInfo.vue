<template>
  <div v-if="showInfo" class="mt-14 p-3.5 pb-3 rounded-md border border-dashed border-[#e6e6e6]">
    <div class="flex items-start justify-between">
      <div class="flex flex-1 items-center gap-3">
        <div
          class="flex items-center text-center justify-center rounded-lg w-9 h-5 bg-gradient-to-r from-[#902ce1] to-[#fe2497] text-white text-[11px] select-none"
        >
          New
        </div>
        <span class="text-[#4A576F] text-sm">This website is using VueJS</span>
        <img src="/images/Vue.webp" alt="VueJS - Nguyễn Hồng Đức Portfolio" class="w-3.5 h-3.5 object-cover" />

        <UPopover :popper="{ placement: 'auto-end' }">
          <button type="button" class="text-green-600 text-sm underline">Why Vue?</button>

          <template #panel>
            <div class="px-4 py-3">
              <Placeholder>
                <div class="w-96">
                  <p class="text-[13px] text-[#262626]">
                    😁 Haha, I used to only learn and work with
                    <span class="text-cyan-500 text-[13px]">ReactJS</span> until I was rejected for a high-paying job
                    that required knowledge of both <span class="text-cyan-500 text-[13px]">ReactJS</span> and
                    <span class="text-green-600 text-[13px]">VueJS</span>.
                  </p>

                  <p class="text-[13px] text-[#262626] mt-2">
                    After that, I learned all three. (<span class="text-cyan-500 text-[13px]">React</span> -
                    <span class="text-red-600 text-[13px]">Angular</span> -
                    <span class="text-green-600 text-[13px]">Vue</span>)
                  </p>
                </div>
              </Placeholder>
            </div>
          </template>
        </UPopover>
      </div>

      <div>
        <button
          type="button"
          title="Hide"
          @click="setShowInfo(false)"
          class="relative -top-2.5 -right-3 md:-top-0 md:-right-0"
        >
          <UIcon
            name="i-material-symbols-light-close-rounded"
            class="w-5 h-5 text-gray-400 lg:hover:text-gray-500 duration-w00"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showInfo = ref(true);

const setShowInfo = (newValue: boolean) => {
  showInfo.value = newValue;
};
</script>
