<script setup lang="ts">
  import { ThemeStore } from "../stores/Theme.js"

  const darkMode = ThemeStore();
</script>

<template>
    <div :class="darkMode.isDark ? ' dark dark:bg-darkMode' : ''" class="flex flex-col justify-center items-center p-16 ">
      
        <h1 :class="darkMode.isDark ? ' dark:text-white ' : ''" class="text-7xl font-FT text-gray-500">
            Welcome To Boyd Auto 
        </h1>
       
       <div v-if="darkMode.isDark === false">
            <img class="h-96 w-96" src="../assets/DarkModecars.svg" />
       </div>
       <div v-else>
           <img class="h-96 w-96" src="../assets/LightMode.svg" />
       </div>
    

    </div>
</template>
