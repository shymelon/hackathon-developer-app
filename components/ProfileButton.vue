<script setup lang="ts">
import { useUser } from "#imports";
import { userLogout } from "~/composables/useAuth";

const user = await useUser();
</script>

<template>
  <div class="hs-dropdown relative inline-flex">
    <button
      id="hs-dropdown-default"
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
      class="hs-dropdown-toggle relative flex items-center gap-2"
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

      <span class="text-base text-[#1F2937] font-semibold">{{
        user.name
      }}</span>
    </button>
    <ul
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dropdown-default"
      class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden px-3 py-2 border border-solid border-[#E5E7EB] bg-white rounded-lg shadow-xl after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
    >
      <li class="rounded-lg">
        <NuxtLink
          to="/settings"
          class="text-sm text-[#1F2937] font-medium px-3 py-2 rounded-lg"
          >Настройки</NuxtLink
        >
      </li>
      <li
        type="button"
        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-[#EB1010] hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        @click="userLogout"
      >
        Выход
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
