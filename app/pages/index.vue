<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <section class="mt-7 flex flex-col justify-between" md="flex-row">
    <div class="mx-auto size-40 overflow-hidden rounded-full bg-component">
      <img src="@/assets/images/avatar.webp" class="object-bottom" />
    </div>

    <div class="mt-4 text-center">
      <h1 class="text-title text-accent font-bold">Hello I'm</h1>
      <h1 class="text-title text-primary font-bold">FireOnIcecube</h1>

      <p class="mt-2 text-caption text-ink-muted">
        一個把設計變成會動、又好用的 Coding 怪咖
      </p>
    </div>

    <hr class="border-thick my-6 border-t" />
  </section>
</template>
