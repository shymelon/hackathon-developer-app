<template>
  <div class="fixed w-full px-10 bg-[#F8FAFC] rounded-b-xl pb-6">
    <ul
      class="flex items-center border border-solid border-[#e5e7eb] rounded-xl shadow-sm"
    >
      <li
        class="item w-1/2 py-3 text-center border-r border-solid border-[#e5e7eb] bg-white rounded-l-xl"
      >
        <NuxtLink
          :to="`/projects/${$route.params.id}/plans/${$route.params.planId}/tasks/`"
          >Задачи</NuxtLink
        >
      </li>

      <li
        class="item w-1/2 py-3 text-center border-l border-solid border-[#e5e7eb] bg-white rounded-r-xl"
      >
        <NuxtLink
          :to="`/projects/${$route.params.id}/plans/${$route.params.planId}/finance/`"
          >Финансы</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
