<script setup lang="ts">
import type { FormValidation } from "~/types/FormValidation";
import type { InputValidation } from "~/types/InputValidation";

const errors: Ref<Map<string, { message: InputValidation }> | undefined> = ref(
  new Map<string, { message: InputValidation }>()
);
let response: FormValidation;

const email = ref("");
const password = ref("");
async function onSubmit() {
  response = await loginWithEmail(email.value, password.value);
  errors.value = response.errors;
}
</script>

<template>
  <form class="space-y-5 relative z-30" @submit.prevent="onSubmit">
    <!-- Email Input -->
    <div class="relative">
      <label for="email" class="text-sm text-[#1F2937] font-medium"
        >Почта</label
      >
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        required
        class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
      />
    </div>

    <!-- Password Input -->
    <div class="relative">
      <label for="password" class="text-sm text-[#1F2937] font-medium"
        >Пароль</label
      >
      <input
        id="password"
        v-model="password"
        name="password"
        type="password"
        autocomplete="current-password"
        class="block w-full rounded-lg border-[#E5E7EB] shadow-sm d mt-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20"
      />
    </div>

    <!-- Register Link -->
    <NuxtLink to="/sign-up" class="text-sm text-[#9CA3AF] font-medium mt-2.5"
      >Зарегистрироваться</NuxtLink
    >

    <!-- Submit Button -->
    <div class="flex mx-auto mt-[30px]">
      <input
        type="submit"
        value="Войти"
        class="cursor-pointer mx-auto py-3.5 px-4 text-base text-[#3B82F6] font-semibold inline-flex items-center rounded-lg border border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
      />
    </div>
  </form>
</template>

<style scoped></style>
