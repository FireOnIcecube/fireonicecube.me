<script lang="ts" setup>
import type { BlogCollectionItem } from "@nuxt/content";

interface Props {
  post: BlogCollectionItem;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="text-ink-muted p-4 border cursor-pointer"
    :to="props.post.path"
  >
    <h1 class="text-justify">{{ props.post.title }}</h1>
    <div class="mt-4 flex gap-x-4 items-end justify-between">
      <div class="flex gap-x-2 overflow-hidden">
        <div
          v-for="tag in props.post.tags"
          :key="tag"
          class="px-2 py-1 rounded-md bg-gray-200 inline-flex gap-x-1 items-center dark:bg-gray-700"
        >
          <span class="tracking-wide"> {{ tag }} </span>
        </div>
      </div>
      <time class="shrink-0">{{ props.post.date }}</time>
    </div>
  </NuxtLink>
</template>
