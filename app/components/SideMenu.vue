<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const { isOpen, close } = useSidemenu();
</script>
<template>
  <!-- Overlay -->
  <div
    v-show="isOpen"
    class="bg-black/40 inset-0 fixed z-50 backdrop-blur-xs"
    @click="close"
  />

  <!-- Menu -->
  <aside
    class="px-6 py-3 bg-surface w-64 shadow-lg transition-transform duration-300 ease-out inset-y-0 right-0 fixed z-50"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex justify-end">
      <button @click="close">
        <Icon
          icon="ci:close-md"
          class="text-primary shrink-0 size-9 cursor-pointer"
        />
      </button>
    </div>
    <nav class="mt-8 flex flex-col gap-y-8 truncate items-center">
      <NuxtLink to="/" class="text-xl block">Home</NuxtLink>
      <NuxtLink to="/blog" class="text-xl block">Blog</NuxtLink>
    </nav>
  </aside>
</template>

<style lang="postcss" scoped></style>
