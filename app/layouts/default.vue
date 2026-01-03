<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-surface flex flex-col min-h-dvh">
    <header
      class="px-6 py-3 bg-component flex gap-x-4 items-center justify-between"
    >
      <div class="flex gap-x-0.5 items-center">
        <div class="shrink-0 size-10 -mt-2">
          <img
            src="@/assets/images/logo.svg"
            class="size-full object-contain"
            alt="logo icon"
          />
        </div>

        <div class="h-5">
          <img
            src="@/assets/images/fireonicecube.svg"
            class="size-full object-contain"
            alt="FireOnIcecube"
          />
        </div>
      </div>

      <Icon icon="ci:hamburger-lg" class="text-primary shrink-0 size-9" />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-12 py-2 text-center bg-primary">
      <p class="text-caption text-ink-alt">©2026 FireonIcecube</p>
    </footer>
  </div>
</template>
