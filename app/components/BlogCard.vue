<script lang="ts" setup>
interface Props {
  title: string;
  dateTime: Date;
  tags: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <section class="text-ink-muted p-4 cursor-pointer border">
    <h1 class="text-justify">My First Post</h1>
    <div class="mt-4 flex gap-x-4 items-end justify-between">
      <div class="flex gap-x-2 overflow-hidden">
        <div class="px-2 py-1 bg-red-200">123</div>
        <div class="px-2 py-1 bg-red-200">123</div>
        <div class="px-2 py-1 bg-red-200">123</div>
        <div class="px-2 py-1 bg-red-200">123</div>
        <div class="px-2 py-1 bg-red-200">123</div>
      </div>
      <time class="shrink-0">2026/01/12</time>
    </div>
  </section>
</template>
