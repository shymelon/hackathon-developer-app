<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div
      class="justify-center flex flex-col lg:flex-row items-center w-full max-w-7xl px-4 sm:px-8 lg:px-16"
    >
      <!-- Form Section -->
      <div class="w-full lg:w-1/3">
        <h1 class="text-gray-900 text-4xl font-semibold mb-4 text-center">
          Вход (dev ветка)
        </h1>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "~/components/LoginForm.vue";
</script>

<style scoped></style>
