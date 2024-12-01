<script setup lang="ts">
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
const ganttContainer = ref<HTMLElement | null>(null);
const tasks = {
  data: [
    {
      id: 1,
      text: "Подготовка основания",
      duration: 10,
      cost: 45000,
      start_date: "19.09.2024",
      end_date: "24.09.2024",
      open: true,
    },
    {
      id: 12,
      text: "Строительство первого этажа",
      duration: 30,
      cost: 200000,
      start_date: "24.09.2024",
      end_date: "30.09.2024",
      open: true,
    },
    {
      id: 13,
      text: "Возведение стен",
      duration: 15,
      cost: 100000,
      start_date: "24.09.2024",
      end_date: "27.09.2024",
      parent: 12,
    },
    {
      id: 14,
      text: "Установка дверей и окон",
      duration: 7,
      cost: 50000,
      start_date: "27.09.2024",
      end_date: "29.09.2024",
      parent: 12,
    },
    {
      id: 15,
      text: "Подготовка пола",
      duration: 8,
      cost: 50000,
      start_date: "27.09.2024",
      end_date: "30.09.2024",
      parent: 12,
    },
    {
      id: 2,
      text: "Установка санузла",
      duration: 20,
      cost: 69995,
      start_date: "01.10.2024",
      end_date: "08.10.2024",
      open: true,
    },
    {
      id: 3,
      text: "Унитаз с бачком и системой слива",
      duration: 5,
      cost: 10370,
      start_date: "01.10.2024",
      end_date: "02.10.2024",
      parent: 2,
    },
    {
      id: 4,
      text: "Гибкая подводка 0,5 м",
      duration: 3,
      cost: 625,
      start_date: "02.10.2024",
      end_date: "04.10.2024",
      parent: 2,
    },
    {
      id: 5,
      text: "Рукомойник без смесителя",
      duration: 4,
      cost: 12000,
      start_date: "04.10.2024",
      end_date: "05.10.2024",
      parent: 2,
    },
    {
      id: 6,
      text: "Смеситель для рукомойника",
      duration: 2,
      cost: 4000,
      start_date: "04.10.2024",
      end_date: "06.10.2024",
      parent: 2,
    },
    {
      id: 7,
      text: "Душевая кабина",
      duration: 5,
      cost: 40000,
      start_date: "06.10.2024",
      end_date: "08.10.2024",
      parent: 2,
    },
    {
      id: 8,
      text: "Смеситель для душа",
      duration: 3,
      cost: 3000,
      start_date: "07.10.2024",
      end_date: "08.10.2024",
      parent: 2,
    },
    {
      id: 9,
      text: "Уплотнение грунта",
      duration: 5,
      cost: 25000,
      start_date: "19.09.2024",
      end_date: "20.09.2024",
      parent: 1,
    },
    {
      id: 10,
      text: "Армирование",
      duration: 7,
      cost: 35000,
      start_date: "20.09.2024",
      end_date: "23.09.2024",
      parent: 1,
    },
    {
      id: 11,
      text: "Заливка бетона",
      duration: 7,
      cost: 50000,
      start_date: "23.09.2024",
      end_date: "24.09.2024",
      parent: 1,
    },
  ],
};

onMounted(() => {
  gantt.config.date_format = "%d.%m.%Y";

  gantt.config.columns = [
    { name: "text", label: "Задача", tree: true, width: 200 },
    { name: "start_date", label: "Начало", align: "center", width: 80 },
    { name: "end_date", label: "Конец", align: "center", width: 80 },
    { name: "cost", label: "Стоимость, руб", align: "center", width: 120 },
    {
      name: "duration",
      label: "Длительность (дни)",
      align: "center",
      width: 120,
    },
  ];

  gantt.i18n.setLocale("ru");
  if (ganttContainer.value) {
    gantt.init(ganttContainer.value);
    gantt.parse(tasks);
  }
});
</script>

<template>
  <div ref="ganttContainer" class="h-[500px]"></div>
</template>

<style scoped></style>
