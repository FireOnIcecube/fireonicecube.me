<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-surface flex min-h-dvh flex-col">
    <header class="bg-component flex items-center justify-between px-2 py-4">
      <div>LOGO</div>
      <Icon icon="ci:hamburger-lg" class="text-primary size-8" />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-primary text-center">
      <p class="text-ink-alt py-2 text-sm">©2025 FireonIcecube</p>
    </footer>
  </div>
</template>
