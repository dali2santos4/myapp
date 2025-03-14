import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
