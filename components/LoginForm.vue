<script setup lang="ts">
const $router = useRouter();
const onSubmit = () => {
	$router.push('/main');
};
</script>

<template>
	<form class="space-y-5" @submit.prevent="onSubmit">
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
		<div class="relative">
			<label for="password" class="text-sm text-[#1F2937] font-medium"
				>Пароль</label
			>
			<input
				id="password"
				type="password"
				class="block w-full rounded-lg border-[#E5E7EB] shadow-sm focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 mt-[15px]"
			/>
		</div>

		<!-- Register Link -->
		<NuxtLink to="/register" class="text-sm text-[#9CA3AF] font-medium mt-2.5"
			>Зарегистрироваться</NuxtLink
		>

		<!-- Submit Button -->
		<div class="flex mx-auto mt-[30px]">
			<button
				type="submit"
				class="mx-auto py-3.5 px-4 text-base text-[#3B82F6] font-semibold inline-flex items-center rounded-lg border border-[#2563EB]"
			>
				Войти
			</button>
		</div>
	</form>
</template>

<style scoped></style>
