<script setup lang="ts">
  import { ThemeStore } from "../stores/Theme.js";
  import { CarDetail } from "../stores/CarDetail.js";
  import CarInfo from '../Interfaces/StoreInterfaces';
  import { useRouter } from 'vue-router';
  import {ref,computed} from 'vue'
  
  
  const darkMode = ThemeStore();
  const carDetail = CarDetail();

  const nav = useRouter();
  
  let search = ref('');

  let Cars:CarInfo[] = [
   {
    name:'nissan r35',
    price:'$6.2 mil JMD',
    img:'https://images.unsplash.com/photo-1619330490306-78b4e6461da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
   },
   {
    name:'nissan r34',
    price:'$1.6 mil JMD',
    img:'https://images.unsplash.com/photo-1611312752514-9439fdba223d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cjM0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
   },
   {
    name:'nissan s15',
    price:'$960,000 JMD',
    img:'https://images.unsplash.com/photo-1577520413075-07f5bd4cbc62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
   },
   {
    name:'Toyota supra',
    price:'$10.6 mil JMD',
    img:'https://images.unsplash.com/photo-1625078923337-e8e14188077b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80'
   },
   {
    name:'Subaru 2021 WRX',
    price:'$ 1.2 mil JMD',
    img:'https://images.unsplash.com/photo-1636074641063-1c2152f1b31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
   },
   {
    name:'Nissan 350z',
    price:"$ 1.4 mil JMD",
    img:'https://images.unsplash.com/photo-1608231488616-4b242241ddf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
   },
   {
    name:'Nissan 400z',
    price:'$4.6 mil JMD',
    img:'https://hips.hearstapps.com/hmg-prod/images/2023-nissan-z-mmp-1-1629244720.jpg?crop=0.897xw:0.957xh;0.0481xw,0.0426xh&resize=1200:*'
   },
   {
    name:'2020 Honda Fit',
    price:'$ 1.1 mil JMD',
    img:'https://images.unsplash.com/photo-1609676671207-d021525a635d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80'
   }
  ]

  let Filter_Cars = computed( () => {
    return Cars.filter( Car => Car.name.match(search.value) )
  })
  
  function getCarDetails(info:CarInfo){
    carDetail.setVehicle(info);
    nav.push("/details");
  }

</script>

<template>
  <div  
   :class="darkMode.isDark ? 'dark dark:bg-darkMode' : ''" 
   class="flex flex-col justify-center items-center h-full" 
  >
    
    <div 
     :class="darkMode.isDark ? 'dark dark:bg-innerDark' : 'bg-Bpurple'"
     class="sticky top-20 z-50 w-full px-4 py-4 "
    >
      <div
      :class="darkMode.isDark ? 'dark dark:bg-darkMode' : 'bg-lightMode'"
      class="w-full rounded-sm py-4 px-10"
      >
       
      <div class="flex space-x-4">

         <input
          v-model="search"
          type="text"
          placeholder="Search the type of vehicle by model example: honda"
          class=" px-4 py-2 flex-1 rounded-md uppercase font-semibold"
          :class="darkMode.isDark ? 'dark:bg-innerDark text-white':'' "
        />

      </div>

      </div>
    </div>

    <div 
     :class="darkMode.isDark ? 'dark:bg-darkMode ' : 'bg-lightMode'"
     class="py-16 px-4 grid lg:grid-cols-4 grid-cols-2 gap-2 w-full"
    >
        <div 
          v-for="car in Filter_Cars" :key="car.name"
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
            class="rounded-md h-48"
            :src="car.img"
          />

          <h2 class="font-semibold text-lg text-center">
            Price : {{car.price}}
          </h2>

          <button @click="getCarDetails(car)"
          :class="darkMode.isDark ? 'dark:bg-yellow-500 text-black':'bg-Bpurple text-white'"
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