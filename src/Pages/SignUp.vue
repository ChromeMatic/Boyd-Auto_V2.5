<script setup lang="ts">
 import { ThemeStore } from "../stores/Theme.js"

  const darkMode = ThemeStore();
</script>

<template>
 <div :class="darkMode.isDark ? 'dark dark:bg-darkMode' : '' " class="flex justify-center items-center p-16">
        <h1 :class="darkMode.isDark ? 'dark:text-white' : ''" class="text-gray-500 text-4xl uppercase">
            Signup page
        </h1>
 </div>
</template>