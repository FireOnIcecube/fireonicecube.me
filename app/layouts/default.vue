<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-surface flex flex-col overflow-hidden min-h-dvh">
    <header class="px-6 py-3 bg-component">
      <NuxtLink
        to="/"
        class="mx-auto flex gap-x-4 max-w-5xl items-center justify-between"
      >
        <AppLogo />
        <Icon icon="ci:hamburger-lg" class="text-primary shrink-0 size-9" />
      </NuxtLink>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-12 py-3 text-center bg-primary">
      <p class="text-caption text-ink-alt">©2026 FireonIcecube</p>
    </footer>
  </div>
</template>

<style lang="postcss" scoped></style>
