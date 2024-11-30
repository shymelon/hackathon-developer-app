<template>
  <div class="flex-1">
    <div class="mx-10 pt-10 flex gap-x-32">
      <div class="flex flex-wrap gap-x-5 gap-y-8">
        <button class="w-[32.354%]">
          <svg
            width="70"
            height="52"
            viewBox="0 0 70 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.05172 8.74549L17.2131 6.88525V40.7377L12.3018 41.7717C9.01306 42.464 5.79705 40.3203 5.17081 37.0184L1.14319 15.7819C0.515988 12.4748 2.73148 9.29886 6.05172 8.74549Z"
              stroke="#2563EB"
              stroke-width="2"
            />
            <path
              d="M63.9483 8.74549L52.7869 6.88525V40.7377L57.6982 41.7717C60.9869 42.464 64.203 40.3203 64.8292 37.0184L68.8568 15.7819C69.484 12.4748 67.2685 9.29886 63.9483 8.74549Z"
              stroke="#2563EB"
              stroke-width="2"
            />
            <g filter="url(#filter0_dd_312_3165)">
              <rect
                x="17.0654"
                y="1"
                width="35.8689"
                height="42.7541"
                rx="5"
                stroke="#2563EB"
                stroke-width="2"
                shape-rendering="crispEdges"
              />
            </g>
            <path
              d="M47.9343 43.7541H22.0654C19.304 43.7541 17.0654 41.5155 17.0654 38.7541L17.0654 35.293L29.4722 22.1452L38.9824 33.0891C39.7831 34.0105 41.2153 34.0059 42.01 33.0794L47.2455 26.9765L52.9343 33.0979V38.7541C52.9343 41.5155 50.6957 43.7541 47.9343 43.7541Z"
              fill="#EFF6FF"
              stroke="#2563EB"
              stroke-width="2"
            />
            <circle
              cx="39.5902"
              cy="14.3442"
              r="4.16393"
              fill="#EFF6FF"
              stroke="#2563EB"
              stroke-width="2"
            />
            <defs>
              <filter
                id="filter0_dd_312_3165"
                x="13.0654"
                y="0"
                width="43.8687"
                height="51.7542"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_312_3165"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_312_3165"
                  result="effect2_dropShadow_312_3165"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_312_3165"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div class="text-center">
            <p class="text-center text-base text[#1F2937] font-medium">
              Drop your files here or
              <span class="text-center text-base text[#2563EB] font-medium"
                >browse</span
              >
            </p>
            <p class="text-center text-sm text[#9CA3AF] font-medium">
              Maximum size: 50MB
            </p>
          </div>
        </button>

        <div class="w-[32.354%] flex flex-col gap-y-[15px] justify-center">
          <label for="name" class="text-sm text-[#1f2937] font-medium"
            >Название</label
          >
          <input
            id="name"
            type="text"
            class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
          />
        </div>

        <div class="flex flex-col gap-y-[15px] justify-center">
          <label for="address" class="text-sm text-[#1f2937] font-medium"
            >Адрес</label
          >
          <input
            id="address"
            type="text"
            class="h-12 bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg shadow-sm"
          />
        </div>

        <div
          class="w-full flex flex-col gap-y-[15px] justify-center col-span-3"
        >
          <label for="description" class="text-sm text-[#1f2937] font-medium"
            >Описание</label
          >
          <textarea
            id="description"
            placeholder="Какое-то описание человека"
            rows="9"
            class="w-[32.354%] bg-white px-4 py-3.5 border border-solid border-[#e5e7eb] rounded-lg resize-none"
          ></textarea>
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

      <div>
        <button
          class="text-base text-white font-semibold bg-[#2563EB] rounded-lg py-2.5 px-3"
        >
          Добавить план
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
