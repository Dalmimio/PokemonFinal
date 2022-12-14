<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
import user from './store/User.js';

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})
</script>

<template>
  <HeaderApp />

  <RouterView />

  <FooterApp />
</template>

<style scoped>
</style>
