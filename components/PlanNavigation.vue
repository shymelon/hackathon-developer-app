<template>
  <ul
    class="mx-10 flex items-center border border-solid border-[#e5e7eb] rounded-xl shadow-sm"
  >
    <li
      class="item w-1/2 py-3 text-center border-r border-solid border-[#e5e7eb] bg-white"
    >
      <NuxtLink
        :to="`/projects/${$route.params.id}/plans/${$route.params.planId}/tasks/`"
        >Задачи</NuxtLink
      >
    </li>

    <li
      class="item w-1/2 py-3 text-center border-r border-solid border-[#e5e7eb] bg-white"
    >
      <NuxtLink
        :to="`/projects/${$route.params.id}/plans/${$route.params.planId}/finance/`"
        >Финансы</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped></style>
