<script setup lang="ts">
const errors: Ref<Map<string, { message: InputValidation }> | undefined> = ref(
  new Map<string, { message: InputValidation }>(),
);
let response: FormValidation;

const usernameOrEmail = ref("");
const password = ref("");
async function onSubmit() {
  response = await loginWithEmail(usernameOrEmail.value, password.value);
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
        id="username"
        v-model="usernameOrEmail"
        type="email"
        name="username"
        required
        class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-[15px]"
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
        class="block w-full rounded-lg border-[#E5E7EB] shadow-sm d mt-[15px]"
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
        class="cursor-pointer mx-auto py-3.5 px-4 text-base text-[#3B82F6] font-semibold inline-flex items-center rounded-lg border border-[#2563EB]"
      />
    </div>
  </form>
</template>

<style scoped></style>
