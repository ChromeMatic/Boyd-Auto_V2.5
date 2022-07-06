<script setup lang="ts">
  import { ThemeStore } from "../stores/Theme.js"
  import {ref} from "vue"
  import User from "../Interfaces/UserInterface"

  const darkMode = ThemeStore();
  
  let forgetPassword = ref(false);
 
  let userFrom:User = {email:'',password:''}

</script>

<template>
   <div
    :class="darkMode.isDark ? 'dark:bg-darkMode text-white' : 'text-purple-800 bg-lightMode' "
    class=" flex flex-col space-y-2 items-center h-full py-8 font-FT uppercase"
   >
       
      <div 
       class="px-4 py-1 rounded-md lg:mt-4 mt-1"
       :class="darkMode.isDark ? 'bg-innerDark' : 'bg-blue-100'"
      >
         <img src="../assets/sport-car.png" class="h-28 w-28"/>
      </div>

      <div>
         <h1
           class="lg:text-8xl text-4xl font-medium m-1" 
         >
            welcome back
         </h1>
      </div>

      <div
        :class="darkMode.isDark ? 'bg-innerDark':'bg-blue-100'"
        class="rounded flex flex-col justify-center items-center px-8 py-4 lg:px-16 space-y-8 "
      >
         <h1 class="text-4xl font-semibold">LOGIN</h1>
         
         <div class="w-full flex flex-col space-y-4">
           
            <input 
               class="h-8 lg:w-96 w-64 p-2 rounded-md" 
               :class="darkMode.isDark ? 'bg-darkMode':''" 
               placeholder="email" v-model="userFrom.email" 
               type="email"
            />

            <input 
               class="h-8 lg:w-96 w-64 p-2 rounded-md" 
               :class="darkMode.isDark ? 'bg-darkMode':''" 
               placeholder="password" v-model="userFrom.password"
               type="password" 
            />

         </div>
         
         <div 
          class="w-full flex lg:flex-row flex-col lg:justify-between justify-center 
                 space-y-4 lg:space-y-0 items-center"
         >

            <span class="w-full flex justify-start space-x-2">
               <input 
               class="rounded-md " 
               v-model="forgetPassword"
               :class="darkMode.isDark ? 'bg-darkMode':''" 
               type="checkbox"
               />
               <h1 
                :class="darkMode.isDark ? 'text-blue-500':''" 
                class="font-semibold uppercase text-sm"
               >
                  forget password
               </h1>
            </span>

            <button 
             :class="darkMode.isDark ? 'bg-blue-500 text-white':'bg-green-500 text-white'"
             class="font-semibold uppercase text-xs rounded-sm py-1 w-full"
            >
               Create an account
            </button>

         </div>

         <button
          :class="darkMode.isDark ? 'bg-yellow-500 text-black':'bg-Bpurple text-white'"
          class="px-16 py-1 rounded-sm text-xl uppercase font-bold w-full"
         >
            login
         </button>

         <div class="flex flex-col w-full space-y-2 justify-center items-center">
             <hr
            :class="darkMode.isDark ? 'bg-darkMode':'bg-blue-300'" 
            class="h-1 w-full rounded-md border-none"
            >

            <h1>
               OR
            </h1>

            <hr
            :class="darkMode.isDark ? 'bg-darkMode':'bg-blue-300'" 
            class="h-1 w-full rounded-md border-none"
            >
            </div>

            <button
            :class="darkMode.isDark ? 'bg-green-500 text-black':'bg-red-500 text-white'"
            class="px-16 py-1 rounded-sm text-xl uppercase font-bold w-full"
            >
               google
            </button>

      </div>

   </div>
</template>