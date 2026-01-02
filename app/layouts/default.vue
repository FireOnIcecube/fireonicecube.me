<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-surface flex flex-col min-h-dvh">
    <header
      class="bg-component px-6 py-3 flex gap-x-4 max-h-[80px] items-center justify-between"
    >
      <div class="flex gap-x-0.5 items-center">
        <div class="shrink-0 size-10">
          <img
            src="@/assets/images/logo.svg"
            class="size-full object-contain"
            alt="logo icon"
          />
        </div>

        <div class="mt-2 h-5">
          <img
            src="@/assets/images/fireonicecube.svg"
            class="size-full object-contain"
            alt="FireOnIcecube"
          />
        </div>
      </div>

      <Icon icon="ci:hamburger-lg" class="text-primary mt-2 shrink-0 size-9" />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-12 py-2 text-center bg-primary">
      <p class="text-ink-alt text-sm">©2026 FireonIcecube</p>
    </footer>
  </div>
</template>
