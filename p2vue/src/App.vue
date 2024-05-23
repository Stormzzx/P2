<template>
  <NavBar />
  <RouterView/>
  <div class="container is-max-desktop px-2 py-4">
  </div>
</template>


<script setup>
import NavBar from '@/components/Navbar.vue';
</script>
<style>
@import 'bootstrap/dist/css/bootstrap.css';
</style>
