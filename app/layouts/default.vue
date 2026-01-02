<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-surface flex flex-col min-h-dvh">
    <header class="bg-component px-2 py-4 flex items-center justify-between">
      <div>LOGO</div>
      <Icon icon="ci:hamburger-lg" class="text-primary size-8" />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-12 text-center bg-primary">
      <p class="text-ink-alt text-sm py-2">©2026 FireonIcecube</p>
    </footer>
  </div>
</template>
