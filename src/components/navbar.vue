<script setup lang="ts">
  
  import { ThemeStore } from "../stores/Theme.js";
  import { ref } from "vue";

  const darkMode = ThemeStore();
  let show = ref(false);

  const routes = [
    { name:'Home',link:'/'},
    { name:'Shop',link:'/customer'},
    { name:'Sell',link:'/dealer'}
  ]

  const regRoute = [
    { name:'login', link:'/login'},
    { name:'signup', link:'/signup'}
  ]

</script>

<template>
    <div class="sticky top-0 z-50">
      
     <div :class="darkMode.isDark ?  'dark:bg-innerDark text-white' : '' " 
      class="px-4 py-2 bg-purple-600 font-FT">
         
         <nav :class="darkMode.isDark ? 'dark:bg-darkMode' : '' " 
            class="px-4 py-4 rounded bg-white flex justify-between items-center">
        
            <!-- Visible on desktop view -->
            <div  class="hidden md:flex space-x-2 items-center">
                  <img class="h-8 w-8" src="../assets/sport-car.png"/> 
                  <h1 :class="darkMode.isDark ? 'dark:text-white' : '' "
                      class="uppercase font-semibold text-innerDark">
                      BoydAuto
                  </h1>
            </div>
            
            <!-- Visible on desktop view -->
            <div class="hidden md:flex space-x-4 items-center">
               <div v-for="route in routes" :key="route.name">
                  <router-link :to="route.link" :class="darkMode.isDark ? 'dark:text-white dark:hover:text-yellow-500' : '' " class="uppercase font-semibold transition text-innerDark hover:text-purple-500">
                  {{route.name}}
                  </router-link>
               </div>
            </div>
            
            <!-- Visible on desktop view -->
            <div class="hidden md:flex space-x-4 items-center">
              <div v-for="reg in regRoute" :key="reg.name">
               <router-link :to="reg.link" :class="darkMode.isDark ? 'dark:text-white dark:hover:text-yellow-500' : '' " 
                class="uppercase font-semibold transition text-innerDark hover:text-purple-500">
                  {{reg.name}}
               </router-link>
              </div>
  
              <button @click="darkMode.changeTheme()" :class="darkMode.isDark ? 'dark:text-white dark:bg-innerDark' : '' " class="rounded bg-purple-50 p-2">
                  <div v-if="darkMode.isDark === true">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
              </button>
            </div>
  
            <!-- Visible on mobile view -->
            <div class="md:hidden items-center">
                 <button @click="show = !show" :class="darkMode.isDark ? 'dark:bg-innerDark dark:text-yellow-500' : ''" class="bg-gray-50 rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                 </button>
            </div>
             
            <!-- Visible on mobile view -->
            <div class="md:hidden space-x-1 items-center justify-center">
                  <img class="h-8 w-8" src="../assets/sport-car.png"/> 
            </div>
  
            <!-- Visible on mobile view --> 
            <div class="md:hidden items-center">
               <button @click="darkMode.changeTheme()" :class="darkMode.isDark ? 'dark:text-white dark:bg-innerDark' : '' " class="rounded bg-indigo-50 p-2">
                  <div v-if="darkMode.isDark === true">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
               </button>
            </div>
         </nav>
         
         <div v-show="show" :class="darkMode.isDark ? 'dark:bg-darkMode' : '' " 
          class="bg-white mt-2 rounded md:hidden">
                <div class="flex flex-col space-y-4 p-2 justify-center items-center">
    
                  <div v-for="route in routes" :key="route.name">
                    <router-link :to="route.link" :class="darkMode.isDark ? 'dark:text-white' : '' " class="uppercase text-innerDark font-semibold hover:text-yellow-500">
                      {{route.name}}
                    </router-link>
                  </div>
  
                  <div v-for=" regs in regRoute" :key="regs.name">
                    <router-link :to="regs.link" :class="darkMode.isDark ? 'dark:text-white' : '' " class="uppercase text-innerDark font-semibold hover:text-yellow-500">
                      {{regs.name}}
                    </router-link>
                  </div>
    
                </div>
         </div>

     </div>

    </div>
</template>