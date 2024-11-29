<script setup lang="ts"></script>

<template>
  <main class="px-10">
    <div>
      <div></div>

      <div></div>
    </div>

    <div>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl text-[#1F2937] font-semibold">Недавние проекты</h1>

        <button
          class="px-3 py-2.5 text-base text-[#2563EB] font-semibold bg-white border border-solid border-[#2563EB] rounded-lg"
        >
          Смотреть все
        </button>
      </div>

      <div class="flex gap-x-5 gap-y-10 items-center justify-between mt-5">
        <NuxtLink to="/projects/project" class="w-[26.232%]">
          <article
            class="min-h-[298px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project_bg_main.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[26.232%]">
          <article
            class="min-h-[298px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project_bg_main.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[26.232%]">
          <article
            class="min-h-[298px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project_bg_main.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[26.232%]">
          <article
            class="min-h-[298px] flex items-end border border-solid border-[#E5E7EB] rounded-lg bg-[url('/images/project_bg_main.png')] bg-no-repeat bg-top-center bg-contain"
          >
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
