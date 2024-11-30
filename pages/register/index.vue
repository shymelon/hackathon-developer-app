<script setup lang="ts">
const $router = useRouter();
const onSubmit = () => {
  $router.push("/dashboard");
};

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
      <div class="w-full lg:w-1/3">
        <h1 class="text-4xl text-[#1F2937] font-semibold mb-6 text-center">
          Регистрация
        </h1>
        <form @submit.prevent="onSubmit">
          <!-- Email Input -->
          <div class="relative">
            <label for="email" class="text-sm text-[#1F2937] font-medium"
              >Почта</label
            >
            <input
              id="email"
              type="email"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-[15px]"
            />
          </div>

          <!-- Password Input -->
          <div class="relative my-4">
            <label for="password" class="text-sm text-[#1F2937] font-medium"
              >Пароль</label
            >
            <input
              id="password"
              type="password"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
            />
          </div>

          <div class="relative">
            <label for="password" class="text-sm text-[#1F2937] font-medium"
              >Подтверждение пароля</label
            >
            <input
              id="password"
              type="password"
              class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
            />
          </div>

          <div
            class="z-50 flex items-center border border-solid border-[#E5E7EB] rounded-lg shadow-sm focus:ring-4 focus:ring-[#2563EB]/20 mt-[30px] bg-white"
          >
            <label
              class="w-1/2 flex items-center px-4 py-3.5 border-r border-solid border-[#E5E7EB] z-30"
            >
              <input type="radio" value="client" name="role" checked />
              <span class="ml-4 text-base text-[#1F2937] font-medium"
                >Клиент</span
              >
            </label>
            <label class="w-1/2 flex items-center px-4 py-3 z-30">
              <input type="radio" value="developer" name="role" />
              <span class="ml-4 text-base text-[#1F2937] font-medium"
                >Девелопер</span
              >
            </label>
          </div>

          <div class="flex mx-auto mt-[30px]">
            <button
              type="submit"
              class="mx-auto py-3.5 px-4 text-base text-[#3B82F6] font-semibold inline-flex items-center rounded-lg border border-[#2563EB]"
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
