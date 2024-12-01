<script setup lang="ts">
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const passwordConfirmation = ref<string>("");

const errors = ref<Map<string, string>>(new Map());

let response;

async function postRegisterForm() {
  errors.value.clear();

  // Basic password confirmation validation
  if (password.value !== passwordConfirmation.value) {
    errors.value.set("passwordConfirmation", "Пароли не совпадают");
    return;
  }

  response = await registerWithEmail(email.value, password.value);

  if (response.errors) {
    for (const [key, value] of Object.entries(response.errors)) {
      errors.value.set(key, value.message);
    }
  }
}

definePageMeta({
  layout: "empty",
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center lg:bg-gray-50 lg:bg-[url('/images/login_bg1.png')] lg:bg-no-repeat lg:bg-w-120 lg:bg-h-480 lg:bg-left-bottom lg:before:block lg:before:absolute lg:before:w-full lg:before:h-full lg:before:pb-[23px] lg:before:bg-[url('/images/login_bg2.png')] lg:before:bg-no-repeat lg:before:bg-w-[510px] lg:before:bg-h-[510px] before:bg-right-bottom z-30 bg-[#F8FAFC]"
  >
    <div
      class="justify-center flex flex-col lg:flex-row items-center w-full max-w-7xl px-4 sm:px-8 lg:px-16"
    >
      <!-- Form Section -->
      <div class="z-30 w-full lg:w-1/3">
        <h1 class="text-4xl text-[#1F2937] font-semibold mb-6 text-center">
          Регистрация
        </h1>
        <form @submit.prevent="postRegisterForm">
          <!-- Email Input -->
          <div class="relative mb-4">
            <label for="email" class="text-sm text-[#1F2937] font-medium"
              >Почта</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
            />
            <p v-if="errors.has('email')" class="text-red-500 text-sm mt-1">
              {{ errors.get("email") }}
            </p>
          </div>

          <!-- Password Input -->
          <div class="relative mb-4">
            <label for="password" class="text-sm text-[#1F2937] font-medium"
              >Пароль</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
            />
            <p v-if="errors.has('password')" class="text-red-500 text-sm mt-1">
              {{ errors.get("password") }}
            </p>
          </div>

          <!-- Password Confirmation Input -->
          <div class="relative mb-4">
            <label
              for="passwordConfirmation"
              class="text-sm text-[#1F2937] font-medium"
              >Подтверждение пароля</label
            >
            <input
              id="passwordConfirmation"
              v-model="passwordConfirmation"
              type="password"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
            />
            <p
              v-if="errors.has('passwordConfirmation')"
              class="text-red-500 text-sm mt-1"
            >
              {{ errors.get("passwordConfirmation") }}
            </p>
          </div>

          <div class="flex mx-auto mt-[30px]">
            <button
              type="submit"
              class="mx-auto py-3.5 px-4 text-base text-[#3B82F6] font-semibold inline-flex items-center rounded-lg border border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
