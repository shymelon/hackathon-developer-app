<template>
  <div class="flex-1 pt-24 -mt-1">
    <PlanNavigation />

    <div class="mt-20 px-10">
      <div class="flex gap-x-5">
        <div
          class="w-[32.354%] min-h-[250px] bg-white pt-5 pb-9 px-10 border border-solid border-[#e5e7eb] rounded-2xl shadow-sm"
        >
          <span class="font-bold text-xl">Статистика по задачам</span>
          <ClientOnly>
            <DohnutChart />
          </ClientOnly>
        </div>

        <div
          class="w-[66.8%] min-h-[250px] bg-white pt-5 pb-9 px-10 border border-solid border-[#e5e7eb] rounded-2xl shadow-sm"
        >
          <span class="font-bold text-xl">Уведомления</span>
          <div class="mt-3 text-gray-500">Уведомлений по проекту нет</div>
        </div>
      </div>

      <div
        class="w-full h-[500px] mt-10 bg-white pt-border border-solid border-[#e5e7eb] shadow-sm"
      >
        <ClientOnly>
          <GanttTable />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GanttTable from "~/components/GanttTable.vue";
</script>
<style scoped></style>
