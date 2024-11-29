<template>
  <div>
    <main id="app" class="px-10">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl text-[#1F2937] font-semibold">Мои проекты</h1>

        <button
          class="px-3 py-2 text-base text-white font-semibold bg-[#2563EB] rounded-lg"
        >
          Создать новый
        </button>
      </div>

      <div
        class="flex gap-x-5 gap-y-10 items-center justify-between flex-wrap mt-10"
      >
        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="min-h-[362px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project__bg.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="min-h-[362px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project__bg.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="min-h-[362px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project__bg.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="min-h-[362px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project__bg.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// const App = {
//   data() {
//     return {
//       projectNumber: 0,
//       projects: [],
//     };
//   },

//   methods: {},
// };
// createApp(App).mount("#app");
</script>

<style scoped></style>
