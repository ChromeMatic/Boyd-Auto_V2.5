<script setup lang="ts">
  import { ThemeStore } from "../stores/Theme.js"

  const darkMode = ThemeStore();
</script>

<template>
    <div :class="darkMode.isDark ? ' dark dark:bg-darkMode' : ''" 
         class="flex justify-center items-center lg:space-y-4 flex-col 
          px-8 py-8 xs:py-4 sm:space-y-2 scroll-smooth xl:h-full"
    >
      
        <div :class="darkMode.isDark ? 'dark:bg-innerDark text-white' : ''"
             class="lg:py-8 lg:px-16 xs:py-4 xs:px-8 rounded-md uppercase font-FT flex  flex-col space-y-2 
                    justify-center items-center bg-blue-100"
        >
           <h1 
             :class="darkMode.isDark ? 'text-yellow-500' : 'text-purple-600'"
             class="lg:text-7xl xs:text-4xl text-center ">
                Welcome to boyd-Auto
           </h1>

           <lord-icon
                src="https://cdn.lordicon.com/xxdqfhbi.json"
                trigger="hover"
                colors="outline:#629110,primary:#7166ee,secondary:#ffc738,tertiary:#16c72e,quaternary:#e8b730"
                style="width:250px;height:250px">
            </lord-icon>

           <p
             :class="darkMode.isDark ? 'text-yellow-500':'text-purple-600'" 
             class="lg:text-xl xs:text-lg text-center font-semibold"
            >
            your one stop place where you can get the car of your dreams.
           </p>

          
            <button :class="darkMode.isDark ? 'bg-yellow-500' : 'bg-purple-600' " 
             class="rounded-sm uppercase font-FT font-semibold w-64 py-2  text-white"
            >
               <h1>get started</h1>
            </button>

        </div>
       
       <div :class="darkMode.isDark ? 'text-white' : ''"
        class="text-4xl font-FT uppercase font-semibold pt-16 text-center">
        <h1> Here at boyd-Auto we offer</h1>
       </div>

       <div class="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-2">

            <div :class="darkMode.isDark ? 'bg-innerDark ' : 'bg-blue-300'"
             class="rounded h-64 w-72 mt-8 shadow-md flex flex-col justify-center items-center">
               
               <h1 :class="darkMode.isDark ? 'text-white' : ''" 
                    class="font-FT uppercase text-xl font-semibold">
                    Shipping  
                </h1>

                <lord-icon
                    src="https://cdn.lordicon.com/hqelaqlb.json"
                    trigger="hover"
                    colors="primary:#3a3347,secondary:#646e78,tertiary:#e8e230,quaternary:#4bb3fd,quinary:#ebe6ef"
                    style="width:150px;height:150px">
                </lord-icon>

                <p
                 :class="darkMode.isDark ? 'text-white' : ''" 
                 class="font-FT uppercase text-sm font-semibold"
                >
                    we can get the right vehicle for you.
                </p>
                    
            </div>
           
            <div :class="darkMode.isDark ? 'bg-innerDark' : 'bg-blue-300'"
            class="rounded h-64 w-72 mt-8 shadow-md flex flex-col justify-center items-center ">

                <h1 :class="darkMode.isDark ? 'text-white' : ''" 
                    class="font-FT uppercase text-xl font-semibold">
                    Inventory
                </h1>

                <lord-icon
                    src="https://cdn.lordicon.com/ggihhudh.json"
                    trigger="hover"
                    colors="primary:#16c72e,secondary:#629110,tertiary:#ebe6ef"
                    style="width:150px;height:150px">
                </lord-icon>

                <p
                 :class="darkMode.isDark ? 'text-white' : ''" 
                  class="font-FT uppercase text-sm font-semibold"
                >
                  View our inventory.
                </p>
                    
            </div>

            <div :class="darkMode.isDark ? 'bg-innerDark' : 'bg-blue-300 '"
            class="rounded h-64 w-72 mt-8 shadow-md  flex flex-col justify-center items-center ">

                <h1 :class="darkMode.isDark ? 'text-white' : ''" 
                    class="font-FT uppercase text-xl font-semibold">
                    saving
                </h1>

                <lord-icon
                    src="https://cdn.lordicon.com/qnlcdeqi.json"
                    trigger="hover"
                    style="width:150px;height:150px">
                </lord-icon>

                <p
                 :class="darkMode.isDark ? 'text-white' : ''" 
                  class="font-FT uppercase text-sm font-semibold"
                >
                   We offer unbeatable savings.
                </p>
                    
            </div>

            <div :class="darkMode.isDark ? 'bg-innerDark ' : 'bg-blue-300'"
            class="rounded h-64 w-72  mt-8 shadow-md   flex flex-col justify-center items-center">
                
                <h1 :class="darkMode.isDark ? 'text-white' : ''" 
                    class="font-FT uppercase text-xl font-semibold">
                    Custom Order
                </h1>

                <lord-icon
                    src="https://cdn.lordicon.com/flvisirw.json"
                    trigger="hover"
                    style="width:150px;height:150px">
                </lord-icon>

                <p
                 :class="darkMode.isDark ? 'text-white' : ''" 
                  class="font-FT uppercase text-sm font-semibold text-center"
                >
                   Need a vechile to fit your needs feel free to conatact us.
                </p>
            </div>

       </div>

    </div>
</template>
