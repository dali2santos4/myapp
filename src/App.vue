<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const role = localStorage.getItem('role')
console.log('role', role)
const route = useRoute();

const showLayout = computed(() => {
  const noLayoutPages = ['/signin', '/signup'];
  return !noLayoutPages.includes(route.path);
});

const showAdminLayout = computed(() => {
  const adminPages = ['/dashboard', '/creation', '/reservation', '/users', '/avis', '/reports'];
  return adminPages.includes(route.path);
});

// Function to check if a link is active
const isActive = (path) => {
  return route.path === path || 
         (path === '/dashboard' && route.path === '/') || // Handle root as dashboard
         route.path.startsWith(path + '/'); // Handle nested routes
};
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <Navbar v-if="showLayout" />
  <div style="display: flex; background-color: white; width: 100vw; flex-direction: row;">
    <aside v-if="showAdminLayout" style="margin-top: 70px; height: 100vh ; min-width: 260px; background-color: #0a1f24; color: white;">
      <ul class="sidebar" style="background-color: transparent; width: 100%; padding: 0;">
        <li :class="{ active: isActive('/dashboard') }">
          <RouterLink to="/dashboard">
            <i class="fas fa-tachometer-alt"></i>
            <span>Manager Dashboard</span>
          </RouterLink>
        </li>
        <!--<li :class="{ active: isActive('/creation') }">
          <RouterLink to="/creation">
            <i class="fas fa-plus-circle"></i>
            <span>Creation</span>
          </RouterLink>
        </li>-->
        <li :class="{ active: isActive('/reservation') }">
          <RouterLink to="/reservation">
            <i class="fas fa-calendar-check"></i>
            <span>Reservation</span>
          </RouterLink>
        </li>
        <li :class="{ active: isActive('/users') }">
          <RouterLink to="/users">
            <i class="fas fa-users"></i>
            <span>Users</span>
          </RouterLink>
        </li>
        <li :class="{ active: isActive('/avis') }">
          <RouterLink to="/avis">
            <i class="fas fa-comment-alt"></i>
            <span>Avis</span>
          </RouterLink>
        </li>
        <li :class="{ active: isActive('/reports') }">
          <RouterLink to="/reports">
            <i class="fas fa-chart-bar"></i>
            <span>Reports</span>
          </RouterLink>
        </li>
      </ul>
    </aside>
    <RouterView />
  </div>
  <Footer v-if="showLayout && !showAdminLayout" />
</template>

<style>
.sidebar {
  list-style: none;
  height: 100vh;
  margin: 0;
  padding: 10px 0;
}

.sidebar li {
  padding: 18px 16px;
  /*margin: 4px 0;*/
  cursor: pointer;
  border-radius: 6px;
  width: 95%;
}

.sidebar li a {
  display: flex;
  align-items: center;
  color: gray;
  text-decoration: none;
}

.sidebar li.active,
.sidebar li:hover {
  background-color: #f4cb00;
  margin: 4px 8px;
}

.sidebar li.active a,
.sidebar li:hover a {
  color: black;
}

.sidebar i {
  width: 20px;
  text-align: center;
}

.sidebar span {
  margin-left: 14px;
  font-size: medium;
}
</style>