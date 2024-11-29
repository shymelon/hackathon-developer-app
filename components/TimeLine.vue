<script setup lang="ts"></script>

<template>
  <div>
    <!-- Item -->
    <div class="group relative flex gap-x-5">
      <!-- Icon -->
      <div
        class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
      >
        <div class="relative z-10 size-6 flex justify-center items-center">
          <slot name="icon"></slot>
        </div>
      </div>
      <!-- End Icon -->

      <!-- Right Content -->
      <slot name="right-content"></slot>
      <!-- End Right Content -->

      <!--      Card-->
      <slot name="card"></slot>
      <!--       End Card-->
    </div>
    <!-- End Item -->
  </div>
</template>

<style scoped></style>
