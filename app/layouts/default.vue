<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col bg-surface min-h-dvh">
    <header class="flex items-center justify-between bg-component px-2 py-4">
      <div>LOGO</div>
      <Icon icon="ci:hamburger-lg" class="size-8 text-primary" />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-12 bg-primary text-center">
      <p class="py-2 text-sm text-ink-alt">©2025 FireonIcecube</p>
    </footer>
  </div>
</template>
