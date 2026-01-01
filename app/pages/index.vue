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
      class="mt-7 flex flex-col justify-between"
      md="justify-center flex-row px-10"
    >
      <div class="mx-auto size-40 overflow-hidden rounded-full bg-component">
        <img src="@/assets/images/avatar.webp" class="object-bottom" />
      </div>

      <div class="mt-4 text-center font-inter">
        <h1 class="text-title font-bold leading-none">
          <span class="block text-accent">Hello I'm</span>
          <span class="block text-primary">FireOnIcecube</span>
        </h1>

        <p class="mt-4 text-caption text-ink-muted">
          一個把設計變得會動、又好用的 Coding 怪咖
        </p>
      </div>
    </section>

    <hr class="border-thick my-6 border-t" />
    <section class="px-4 text-center">
      <h1 class="text-title text-primary font-bold font-inter">My Story</h1>

      <article class="mt-2 rounded-lg bg-component px-7 py-2">
        <p class="text-body text-ink-muted leading-loose space-y-2">
          <span class="block">
            我在設計跟工程的交界地待著，喜歡把漂亮的 Figma
            設計做成既順手又細膩的網頁。常用 Vue/React +
            Tailwind，把複雜的互動拆成單純好維護的元件。
          </span>
          <span class="block">
            空閒時會看配色、做個小動畫練習，或畫幾張插圖放到作品集。
          </span>

          <span class="block">
            想一起做點有趣的互動或需要把設計落地？找我聊聊！
          </span>
        </p>
      </article>
    </section>
  </div>
</template>
