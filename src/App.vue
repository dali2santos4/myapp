

<script setup>
 import { RouterView } from 'vue-router';
 import Navbar from '@/components/Navbar.vue';
 import Footer from '@/components/Footer.vue';

 import { computed } from 'vue';
import { useRoute } from 'vue-router';


    const route = useRoute();
    const showLayout = computed(() => {
      // Hide header/footer on these pages
      const noLayoutPages = ['/signin', '/signup'];
      return !noLayoutPages.includes(route.path);
    });
</script>

<template>
  
  <Navbar v-if="showLayout" />
  <RouterView />
  <Footer v-if="showLayout" />
</template>
<style>

</style>