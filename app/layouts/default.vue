<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useSidemenu } from "@/composables/useSidemenu";

const { toggle } = useSidemenu();
</script>

<template>
  <div class="bg-surface flex flex-col overflow-hidden min-h-dvh">
    <header class="py-4 bg-component flex gap-x-4 items-center justify-around">
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>

      <nav class="text-lg hidden" lg="flex gap-x-8 items-center">
        <NuxtLink to="/" class="block">Home</NuxtLink>
        <NuxtLink to="/about" class="block">About</NuxtLink>
        <NuxtLink to="/blog" class="block">Blog</NuxtLink>
      </nav>
      <Icon
        icon="ci:hamburger-lg"
        class="text-primary shrink-0 size-9 cursor-pointer"
        lg="hidden"
        @click="toggle"
      />
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
