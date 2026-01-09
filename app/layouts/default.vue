<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useSidemenu } from "@/composables/useSidemenu";

const { toggle } = useSidemenu();
</script>

<template>
  <div class="bg-surface flex flex-col overflow-hidden min-h-dvh">
    <header class="px-6 py-3 bg-component">
      <div class="mx-auto flex gap-x-4 max-w-5xl items-center justify-between">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>

        <Icon
          icon="ci:hamburger-lg"
          class="text-primary shrink-0 size-9 cursor-pointer"
          @click="toggle"
        />
      </div>
      <SideMenu />
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
