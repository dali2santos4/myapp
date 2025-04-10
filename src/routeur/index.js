import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import PageAccueil from '../views/PageAccueil.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/PageAccueil', component: PageAccueil },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
