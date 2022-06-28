<script setup lang="ts">
 import { ThemeStore } from "../stores/Theme.js";
 import {computed,ref} from "vue";

 const darkMode = ThemeStore();
 let searchText: string = "";

 let text = ref(searchText)
 let years:number[] = [
    2010,2011,2012,
    2013,2014,2015,
    2016,2017
 ]
 
 
</script>

<template>
  <div
    :class="darkMode.isDark ? 'dark:bg-innerDark text-white' : 'bg-Bpurple'"
    class="py-2 px-4 w-full uppercase font-FT"
  >  
    <div 
      :class="darkMode.isDark ? 'dark:bg-darkMode text-white' : 'bg-lightMode text-Bpurple'"
      class="p-4 flex justify-between items-center space-x-4 rounded"
    >  

     <span class="font-semibold flex justify-center items-center space-x-4">
       <h1>search</h1>
       <input 
       v-model="text"
       :class="darkMode.isDark ? 'dark:text-yellow-500 bg-innerDark border-yellow-500 ' : 'text-purple-800 border-blue-500 '"
       class=" border border-solid 
          rounded 
          transition ease-in-out
          focus:border-purple-600
          focus:outline-none
          px-1 py-1 
          " />
     </span>

     
    </div>
     
  </div>
</template>