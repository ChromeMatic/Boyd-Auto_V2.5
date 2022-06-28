<script setup lang="ts">
    import { ThemeStore } from "../stores/Theme.js";
    
    const darkMode = ThemeStore();
</script>

<template>
     <div 
      :class="darkMode.isDark ? 'dark:bg-innerDark dark:text-white' : ''"
      class="py-16 flex justify-center items-start font-FT uppercase bg-Bpurple text-white 
             font-semibold"
     >
        footer
     </div>
</template>
