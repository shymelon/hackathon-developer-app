<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const chartOptions = ref({
  chart: {
    type: "donut",
  },
  labels: ["В срок", "С задержкой", "Критически задержаны"],
  colors: ["#3B82F6", "#FBBF24", "#F87171"],
  legend: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " задач";
      },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Всего",
            fontSize: "14px",
          },
        },
      },
    },
  },
});

const series = ref([5, 3, 2]);
</script>

<template>
  <VueApexCharts type="donut" :options="chartOptions" :series="series" />
</template>

<style scoped></style>
