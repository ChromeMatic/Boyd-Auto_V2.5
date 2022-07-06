<script setup lang="ts">
  import { ThemeStore } from "../stores/Theme"
  import { CarDetail } from "../stores/CarDetail"

  const darkMode = ThemeStore(); 
  const carDetail = CarDetail().getVehicle; 
</script>

<template>
  <div
   :class="darkMode.isDark ? 'dark:bg-darkMode dark:text-white' : 'bg-lightMode'" 
   class="flex flex-col justify-center items-center min-h-full w-full py-8 px-8 font-FT uppercase"
  >
    
    <img 
     class="rounded-lg" 
     :src="carDetail.img"
    />

    <div
     :class="darkMode.isDark ? 'bg-innerDark':'bg-blue-300'"
     class="flex flex-col w-full justify-center items-center px-8 py-2 space-y-4 mt-4 rounded-md"
    >
      <h1
       class="font-semibold text-2xl"
      >
        name: {{carDetail.name}}
      </h1>

      <h1
       class="font-semibold text-2xl"
      >
        price: {{carDetail.price}}
      </h1>

    </div>

  </div>
</template>