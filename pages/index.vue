<template>
  <div
    class="min-h-screen flex items-center justify-center lg:bg-gray-50 lg:bg-[url('/images/login_bg1.png')] lg:bg-no-repeat lg:bg-w-120 lg:bg-h-480 lg:bg-left-bottom lg:before:block lg:before:absolute lg:before:w-full lg:before:h-full lg:before:pb-[23px] lg:before:bg-[url('/images/login_bg2.png')] lg:before:bg-no-repeat lg:before:bg-w-[510px] lg:before:bg-h-[510px] before:bg-right-bottom"
  >
    <div
      class="justify-center flex flex-col lg:flex-row items-center w-full max-w-7xl px-4 sm:px-8 lg:px-16"
    >
      <!-- Form Section -->
      <div class="w-full lg:w-1/3">
        <h1 class="text-4xl text-[#1F2937] font-semibold mb-6 text-center">
          Вход
        </h1>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "~/components/LoginForm.vue";

definePageMeta({
  layout: "empty",
});
</script>

<style scoped></style>
