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
  <div>
    <section
      class="mx-auto mt-7 flex flex-col max-w-3xl items-center justify-between"
      md="flex-row px-10 "
    >
      <div class="rounded-full bg-component size-40 overflow-hidden">
        <img src="@/assets/images/avatar.webp" class="size-full" />
      </div>

      <div class="font-inter mt-4 text-center">
        <h1 class="text-title leading-none font-bold">
          <span class="text-accent block">Hello I'm</span>
          <span class="text-primary block">FireOnIcecube</span>
        </h1>

        <p class="text-caption text-ink-muted mt-2">
          一個把設計變得會動又好用的 Coding 怪咖
        </p>
      </div>
    </section>

    <hr class="my-6 border-t border-line" />

    <section class="mx-auto px-4 text-center max-w-3xl">
      <h2 class="text-subtitle text-primary font-bold font-inter">My Lore</h2>

      <article class="mt-2 p-2 px-7 rounded-lg bg-component" md="p-12">
        <p class="text-body text-ink-muted leading-loose space-y-2">
          <span class="block">
            我在設計跟工程的交界地待著，喜歡把漂亮的 Figma
            設計做成既順手又細膩的網頁。常用 Vue/React +
            Tailwind，把複雜的互動拆成單純好維護的元件。
          </span>

          <span class="block">
            空閒時會寫寫技術文章、做個小動畫練習，或畫幾張插圖放到作品集。
          </span>

          <span class="block">
            想一起做點有趣的互動或需要把設計落地？找我聊聊！
          </span>
        </p>
      </article>
    </section>

    <section class="mx-auto mt-12 px-4 max-w-3xl">
      <h2 class="text-subtitle text-primary font-bold font-inter text-center">
        My Social
      </h2>

      <div class="mt-4 flex flex-wrap justify-around">
        <a
          href="https://github.com/FireOnIcecube"
          target="_blank"
          class="px-2 py-1 rounded-md bg-gray-200 inline-flex gap-x-1 items-center dark:bg-gray-700"
        >
          <span class="i-mdi:github size-8 inline-block" />
          <span class="tracking-wide">Github</span>
        </a>
      </div>

      <p class="mt-6 flex gap-x-2 justify-center">
        <span class="text-ink-muted">也能 mail 給我: </span>
        <span>fireonicecube@gmail.com </span>
      </p>
    </section>
  </div>
</template>

<style lang="postcss" scoped></style>
