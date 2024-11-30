<template>
  <ul
    class="mx-10 flex items-center border border-solid border-[#e5e7eb] rounded-xl shadow-sm"
  >
    <li class="w-1/4 py-3 text-center border-r border-solid border-[#e5e7eb]">
      <NuxtLink :to="`/projects/${$route.params.id}`">О проекте</NuxtLink>
    </li>

    <li class="w-1/4 py-3 text-center border-r border-solid border-[#e5e7eb]">
      <NuxtLink :to="`/projects/${$route.params.id}/planning`"
        >Планирование</NuxtLink
      >
    </li>

    <li class="w-1/4 py-3 text-center border-r border-solid border-[#e5e7eb]">
      <NuxtLink :to="`/projects/${$route.params.id}/finance`">Финансы</NuxtLink>
    </li>

    <li class="w-1/4 py-3 text-center">
      <NuxtLink to="">3д модель</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
