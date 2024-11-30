<script setup lang="ts">
import ProjectNavigation from "~/components/ProjectNavigation.vue";
</script>

<template>
  <div class="flex-1">
    <ProjectNavigation />

    <div class="mx-10 pt-10 flex gap-x-32">
      <div class="w-[32.354%] min-h-[340px]">
        <img
          class="w-full h-full object-cover rounded-lg"
          src="/images/project_img.png"
          alt="иллюстрационная картинка"
        />
      </div>

      <div class="w-[57.721%]">
        <div>
          <h2 class="text-2xl text-[#1F2937] font-bold">
            Жилой комплекс "Зелёный край"
          </h2>
          <p class="mt-2 text-sm text-[#1F2937] font-semibold">
            <span class="text-sm text-[#6b7280] font-semibold">Адрес:</span> г.
            Санкт-Петербург, пр. Энергетиков, 15
          </p>
        </div>
        <div class="mt-10">
          <span class="text-sm text-[#6b7280] font-semibold">Описание:</span>
          <p class="mt-1 text-base text-[#1f2937] font-medium">
            "Зелёный край" — это современный жилой комплекс комфорт-класса,
            включающий три многоквартирных дома высотой 16 этажей, подземный
            паркинг на 250 мест и благоустроенную прилегающую территорию с
            детскими и спортивными площадками. Комплекс спроектирован с учётом
            экологических стандартов: фасады из энергоэффективных материалов,
            озеленение крыши паркинга и системы сбора дождевой воды для полива.
          </p>
        </div>

        <div class="mt-10">
          <span class="text-sm text-[#6b7280] font-semibold"
            >Пользователи, имеющие доступ:</span
          >
          <ul class="mt-2 flex flex-col gap-y-1">
            <li
              class="w-fit px-3 py-2 flex gap-x-2 items-center border border-solid border-[#E5E7EB] rounded-lg"
            >
              <svg
                class="flex items-center justify-center"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0832 12.25V11.0833C11.0832 10.4645 10.8373 9.871 10.3998 9.43342C9.96217 8.99583 9.36868 8.75 8.74984 8.75H5.24984C4.631 8.75 4.03751 8.99583 3.59992 9.43342C3.16234 9.871 2.9165 10.4645 2.9165 11.0833V12.25"
                  stroke="#1F2937"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z"
                  stroke="#1F2937"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text-base text-[#1F2937] font-semibold"
                >Name Surname</span
              >
            </li>
            <li
              class="w-fit px-3 py-2 flex gap-x-2 items-center border border-solid border-[#E5E7EB] rounded-lg"
            >
              <svg
                class="flex items-center justify-center"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0832 12.25V11.0833C11.0832 10.4645 10.8373 9.871 10.3998 9.43342C9.96217 8.99583 9.36868 8.75 8.74984 8.75H5.24984C4.631 8.75 4.03751 8.99583 3.59992 9.43342C3.16234 9.871 2.9165 10.4645 2.9165 11.0833V12.25"
                  stroke="#1F2937"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z"
                  stroke="#1F2937"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text-base text-[#1F2937] font-semibold"
                >Name Surname</span
              >
            </li>
            <li
              class="w-fit px-3 py-2 flex gap-x-2 items-center border border-solid border-[#E5E7EB] rounded-lg"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.9165 7H11.0832"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 2.91669V11.0834"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text-base text-[#1F2937] font-semibold"
                >Добавить</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
