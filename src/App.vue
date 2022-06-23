<script setup lang="ts">
 import navbar from './components/navbar.vue'

</script>

<template>
   <div>
     <navbar/> 
     <router-view v-slot="{ Component }"> 
       <transition 
          name="fade" 
          mode="out-in"
         >
         <component :is="Component"/>
       </transition>
     </router-view>
   </div>
</template>

<style>

 .fade-enter-from,
 .fade-leave-to{
  opacity: 0;
 }

 .fade-enter-active,
 .fade-leave-active{
  transition: opacity .3s ease-in-out;
 }

</style>

