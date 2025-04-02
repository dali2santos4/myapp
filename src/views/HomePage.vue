<script setup>
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import Market from '@/components/Market.vue';

</script>

<template> 
  <div class="container">
    <Navbar />
      <Hero />
    </div>

    <Market />
</template>
  
<style>


.container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
  }


</style>
  