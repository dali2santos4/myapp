<script setup>
import Hero from '@/components/Hero.vue';
import Market from '@/components/Market.vue';
import Location from '@/components/Location.vue';
import Testimonial from '@/components/Testimonial.vue';


const token = localStorage.getItem('token')
console.log('token', token)

</script>

<template> 
<div class="elem">
  <div class="container">

      <Hero />
    </div>
    <Market />

    <Location />

    <Testimonial />

  </div>

</template>
  
<style >
.elem {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

body {
  margin: 0;
  overflow-x: hidden;
}

</style>
  