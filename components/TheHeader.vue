<script setup lang="ts">
import { useUser } from "#imports";
import { userLogout } from "~/composables/useAuth";

const user = await useUser();
</script>

<template>
  <div class="px-10 pb-10 pt-3 flex justify-between items-center bg-[#F8FAFC]">
    <div class="flex gap-x-3 items-center">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.36693 23.5776C4.64208 22.5975 1.53735 20.9659 1.53735 18.9079C1.53735 16.2994 4.66529 12.0521 13.0006 13.8945C14.1812 14.1555 15.3365 14.6056 16.2589 15.3873C22.1525 20.3821 17.463 29.9391 15.9111 30.2074C14.3587 30.8415 9.18419 27.3825 8.14927 17.6972C8.14927 20.4068 8.78172 33.8393 16.0261 33.4934C22.0056 32.6863 23.3855 22.5975 24.3054 19.715C25.2828 17.2936 25.6853 15.6218 28.2151 16.2559C30.7448 16.8901 30.499 18.2279 30.2849 18.9079C29.5949 21.0986 26.701 22.3669 25.1103 23.6929C27.161 23.3277 31.8258 21.6635 33.1596 18.389C34.3103 15.5641 29.48 11.0674 26.4327 9.33787C24.3054 7.78131 21.4421 4.31074 20.3382 2.88101C18.9584 1.09384 17.061 0.229081 15.2787 0.574985C12.7489 1.06594 9.41417 4.37993 9.18419 7.60836C10.6216 5.93649 12.1164 3.22692 14.3587 2.88101C17.5491 2.38884 16.9115 5.70589 16.4286 6.513C16.0836 7.0895 15.2787 7.78131 14.3587 8.24251C13.2088 8.81902 4.72796 11.3939 2.45726 13.3158C0.502437 14.9703 -0.187515 17.8528 0.0424719 18.9079C0.472174 20.8791 4.18212 23.5776 6.36693 23.5776ZM21.4881 16.4865C20.2232 13.0852 17.3293 11.3556 15.9111 11.0097C18.0959 10.5485 19.6483 9.56847 20.1082 6.513C20.5682 8.76137 23.7304 11.7015 25.6853 12.624C22.0631 12.7969 21.6606 15.7947 21.4881 16.4865Z"
          fill="#1F2937"
        />
      </svg>

      <h1 class="text-xl text-[#1F2937] font-bold">MISIS X Narton Union</h1>
    </div>

    <div class="flex gap-x-5 items-center">
      <ul class="flex gap-x-5 items-center">
        <li class="text-sm text-[#1F2937] font-medium">
          <NuxtLink to="/dashboard">Главная</NuxtLink>
        </li>
        <li class="text-sm text-[#1F2937] font-medium">
          <NuxtLink to="/projects">Проекты</NuxtLink>
        </li>
        <li class="text-sm text-[#1F2937] font-medium">
          <NuxtLink to="/settings">Настройки</NuxtLink>
        </li>
        <li>
          <svg
            class="flex items-center justify-center"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5.33331C4 4.27245 4.42143 3.25503 5.17157 2.50489C5.92172 1.75474 6.93913 1.33331 8 1.33331C9.06087 1.33331 10.0783 1.75474 10.8284 2.50489C11.5786 3.25503 12 4.27245 12 5.33331C12 9.99998 14 11.3333 14 11.3333H2C2 11.3333 4 9.99998 4 5.33331Z"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.8667 14C6.97829 14.203 7.14233 14.3722 7.34169 14.4901C7.54106 14.608 7.76842 14.6702 8.00003 14.6702C8.23165 14.6702 8.45901 14.608 8.65837 14.4901C8.85773 14.3722 9.02178 14.203 9.13337 14"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li>
          <svg
            class="flex items-center justify-center"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 14L11.1333 11.1334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>

      <button
        class="px-3 py-2 flex gap-x-2 items-center border border-solid border-[#E5E7EB] rounded-lg"
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
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
        @click="userLogout"
      >
        Выход
      </button>
    </div>
  </div>
</template>

<style scoped></style>
