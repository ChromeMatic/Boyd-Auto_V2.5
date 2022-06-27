<script setup lang="ts">
   import { ThemeStore } from "../stores/Theme.js"
   import searchFilter from "../components/searchFilter.vue"

   const darkMode = ThemeStore();

   interface car{
    name: string,
    price: string,
    img: string
  }

 let Cars:car[] = [
   {
    name:'nissan gtr r35',
    price:'$2.6 mil JMD',
    img:'https://images.unsplash.com/photo-1619330490306-78b4e6461da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
   },
   {
    name:' nissan gtr r34',
    price:'$1.6 mil JMD',
    img:'https://images.unsplash.com/photo-1611312752514-9439fdba223d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cjM0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
   },
   {
    name:'nissan s15',
    price:'$960,000 JMD',
    img:'https://images.unsplash.com/photo-1577520413075-07f5bd4cbc62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
   },
   {
    name:'Toyota supra 2021 mrk5',
    price:'$10.6 mil JMD',
    img:'https://images.unsplash.com/photo-1625078923337-e8e14188077b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80'
   }
 ]
</script>

<template>
  <div  
   :class="darkMode.isDark ? 'dark dark:bg-darkMode' : ''" 
    class="flex flex-col justify-center items-center " 
  >
    <searchFilter/>

    <div 
     :class="darkMode.isDark ? 'dark:bg-darkMode ' : 'bg-white'"
     class="py-16 px-4 grid lg:grid-cols-4 grid-cols-2 gap-2"
    >
        <div 
          v-for="car in Cars" :key="car.name"
          :class="darkMode.isDark ? 'dark:bg-innerDark text-white':'bg-blue-100'"
          class="rounded font-FT uppercase 
          flex flex-col justify-center 
          items-center space-y-4 px-4 py-4
          "
        >
          <h1 class="font-semibold text-xl text-center">
            {{car.name}}
          </h1>

          <img 
            class="rounded-md"
            :src="car.img"
          />

          <h2 class="font-semibold text-lg text-center">
            Price : {{car.price}}
          </h2>

          <button
          :class="darkMode.isDark ? 'dark:bg-yellow-500 text-black':'bg-purple-600 text-white'"
           class="rounded-sm px-16"
          >
            <h1 
              class="uppercase font-bold"
            >
              view
            </h1>
          </button>

        </div>
    </div>
     
  </div>
</template>