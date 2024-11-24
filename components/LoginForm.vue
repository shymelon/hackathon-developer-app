<script setup lang="ts">
const $router = useRouter();
const onSubmit = () => {
  $router.push("/dashboard");
};
</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <!-- Email Input -->
    <div>
      <label for="email" class="sr-only">Почта</label>
      <input
        id="email"
        type="email"
        class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Почта"
      />
    </div>

    <!-- Password Input -->
    <div class="relative">
      <label for="password" class="sr-only">Пароль</label>
      <input
        id="password"
        type="password"
        class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Пароль"
      />
    </div>

    <!-- Register Link -->
    <a href="#" class="text-indigo-600 hover:underline text-sm"
      >Зарегистрироваться</a
    >

    <!-- Submit Button -->
    <div class="flex mx-auto">
      <button
        type="submit"
        class="mx-auto py-3 font-semibold px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-indigo-600 text-indigo-600 hover:border-indigo-500 hover:text-indigo-500 focus:outline-none focus:border-indigo-500 focus:text-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
      >
        Войти
      </button>
    </div>
  </form>
</template>

<style scoped></style>
