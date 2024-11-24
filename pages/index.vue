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
        <form class="space-y-6">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
