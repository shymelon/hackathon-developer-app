<script setup lang="ts"></script>

<template>
  <div class="flex-1">
    <ProjectNavigation />
    <div class="mx-10 pt-10 flex gap-x-5 justify-between">
      <div class="w-[57.721%]">
        <div class="w-full min-h-[200px] overflow-hidden">
          <img
            class="w-full object-fill rounded-lg"
            src="/images/project_img.png"
            alt="иллюстрационная картинка"
          />
        </div>

        <div class="w-full mt-10">
          <div class="flex justify-between">
            <div>
              <h2 class="text-2xl text-[#1F2937] font-bold">
                Жилой комплекс "Зелёный край"
              </h2>
              <p class="mt-2 text-sm text-[#1F2937] font-semibold">
                <span class="text-sm text-[#6b7280] font-semibold">Адрес:</span>
                г. Санкт-Петербург, пр. Энергетиков, 15
              </p>
            </div>

            <button
              class="w-fit h-[38px] px-3 text-[15px] text-[#2563EB] font-semibold border border-solid border-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white"
            >
              3д модель
            </button>

            <div
              id="modal"
              class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center hidden"
            >
              <div
                class="relative bg-white p-10 rounded-2xl shadow-lg max-w-sm w-full"
              >
                <svg
                  class="absolute right-5 top-5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="#1F2937"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="#1F2937"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <img
                  src=""
                  alt="qr-code"
                  class="w-full aspect-w-1 aspect-h-1 bg-[#D9D9D9] rounded-[5px]"
                />

                <h4
                  class="w-full text-center text-2xl text-[#1F2937] font-bold mt-5"
                >
                  QR-код
                </h4>

                <p
                  class="text-center text-base text-[#6B7280] font-medium mt-2.5"
                >
                  Отсканируйте данный код, чтобы открыть 3д модель
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <span class="text-sm text-[#6b7280] font-semibold">Описание:</span>
            <p class="mt-1 text-base text-[#1f2937] font-medium">
              "Зелёный край" — это современный жилой комплекс комфорт-класса,
              включающий три многоквартирных дома высотой 16 этажей, подземный
              паркинг на 250 мест и благоустроенную прилегающую территорию с
              детскими и спортивными площадками. Комплекс спроектирован с учётом
              экологических стандартов: фасады из энергоэффективных материалов,
              озеленение крыши паркинга и системы сбора дождевой воды для
              полива.
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

      <div class="w-[32.345%] flex flex-col items-end">
        <button
          class="text-base text-white font-semibold bg-[#2563EB] rounded-lg py-2.5 px-3"
        >
          Добавить план
        </button>

        <ul class="w-full mt-5 flex flex-col gap-y-5">
          <li
            class="w-full bg-white rounded-xl shadow-sm border border-solid border-[#e5e7eb]"
          >
            <NuxtLink to="/projects/[id]/plans/[planID]/tasks">
              <div
                class="w-full h-full border-t-2 border-solid border-[#BFBFBF] p-5 rounded-xl hover:border-[#2563EB]"
              >
                <h3 class="text-lg text-[#1F2937] font-bold">План 2</h3>
                <span class="my-4 text-base text-[#6B7280] font-medium"
                  >Дата создания: 30.11.2024</span
                >
                <button class="w-fit py-3.5 flex items-center gap-x-2.5">
                  <span class="text-base text-[#3B82F6] font-semibold"
                    >Перейти</span
                  >
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.5L4.75 4L1.25 0.5"
                      stroke="#2563EB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </li>

          <li
            class="w-full bg-white rounded-xl shadow-sm border border-solid border-[#e5e7eb]"
          >
            <NuxtLink to="/projects/[id]/plans/[planID]/tasks">
              <div
                class="w-full h-full border-t-2 border-solid border-[#BFBFBF] p-5 rounded-xl hover:border-[#2563EB]"
              >
                <h3 class="text-lg text-[#1F2937] font-bold">План 1</h3>
                <span class="my-4 text-base text-[#6B7280] font-medium"
                  >Дата создания: 30.11.2024</span
                >
                <button class="w-fit py-3.5 flex items-center gap-x-2.5">
                  <span class="text-base text-[#3B82F6] font-semibold"
                    >Перейти</span
                  >
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.5L4.75 4L1.25 0.5"
                      stroke="#2563EB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
