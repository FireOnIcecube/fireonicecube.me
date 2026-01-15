<script setup lang="ts">
import BlogCard from "~/components/BlogCard.vue";

const { data: posts } = await useAsyncData(() => queryCollection("blog").all());
</script>

<template>
  <section class="mx-auto mt-4 flex flex-col gap-y-4 max-w-5xl" lg="mt-12">
    <template v-for="p in posts" :key="p.id">
      <BlogCard :post="p" />
    </template>
  </section>
</template>
