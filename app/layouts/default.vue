<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useSidemenu } from "@/composables/useSidemenu";

const { toggle } = useSidemenu();
</script>

<template>
  <div class="bg-surface flex flex-col overflow-hidden min-h-dvh">
    <header
      class="px-4 py-4 bg-component flex items-center justify-between"
      lg="px-8"
    >
      <NuxtLink to="/" class="flex-1 shrink-0"> <AppLogo /> </NuxtLink>

      <nav
        class="text-lg flex-1 hidden"
        lg="flex justify-center gap-x-8 items-center"
      >
        <NuxtLink to="/" class="block">Home</NuxtLink>
        <NuxtLink to="/about" class="block">About</NuxtLink>
        <NuxtLink to="/blog" class="block">Blog</NuxtLink>
      </nav>

      <div class="flex flex-1 gap-x-2 justify-end">
        <Icon
          icon="material-symbols:dark-mode-rounded"
          class="text-primary shrink-0 size-8 cursor-pointer"
        />
        <Icon
          icon="ci:hamburger-lg"
          class="text-primary shrink-0 size-8 cursor-pointer"
          lg="hidden"
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
