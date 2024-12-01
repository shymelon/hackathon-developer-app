<template>
  <main class="px-10 flex-1 pt-24 -mt-1">
    <h1 class="text-4xl text-[#1F2937] font-semibold">Настройки</h1>

    <div class="mt-9 grid grid-cols-3 gap-x-5 gap-y-7">
      <div class="flex flex-col gap-y-[15px] justify-center">
        <label for="lastName" class="text-sm text-[#1f2937] font-medium"
          >Фамилия</label
        >
        <input
          id="lastName"
          type="text"
          class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
        />
      </div>

      <div class="flex flex-col gap-y-[15px] justify-center">
        <label for="name" class="text-sm text-[#1f2937] font-medium">Имя</label>
        <input
          id="name"
          type="text"
          class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
        />
      </div>

      <div class="flex flex-col gap-y-[15px] justify-center">
        <label for="patronymic" class="text-sm text-[#1f2937] font-medium"
          >Отчество</label
        >
        <input
          id="patronymic"
          type="text"
          class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
        />
      </div>

      <div class="flex flex-col gap-y-[15px] justify-center">
        <label for="email" class="text-sm text-[#1f2937] font-medium"
          >Почта</label
        >
        <input
          id="email"
          type="email"
          class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
        />
      </div>

      <div class="flex flex-col gap-y-[15px] justify-center">
        <label for="company" class="text-sm text-[#1f2937] font-medium"
          >Компания</label
        >
        <input
          id="company"
          type="text"
          class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
        />
      </div>

      <div class="flex flex-col gap-y-[15px] justify-center col-span-3">
        <label for="comment" class="text-sm text-[#1f2937] font-medium"
          >Описание</label
        >
        <textarea
          id="comment"
          placeholder="Какое-то описание человека"
          rows="9"
          class="w-[32.354%] bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg resize-none"
        ></textarea>
      </div>
    </div>

    <NuxtLink to="/projects">
      <button
        class="text-base text-white font-semibold py-2.5 px-3 bg-[#2563EB] rounded-lg mt-9"
      >
        Сохранить
      </button>
    </NuxtLink>
  </main>
</template>

<style scoped></style>
