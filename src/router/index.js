import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import PageAccueil from '../views/PageAccueil.vue';
import ExplorePage from '@/views/ExplorePage.vue';
import Messanger from '@/views/Messanger.vue';
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/signup', component: SignUp, name: 'signup' },
  { path: '/signin', component: SignIn, name: 'signin' },
  { path: '/explore', component: ExplorePage, name: 'explore' },
  { path: '/PageAccueil', component: PageAccueil },
  { path: '/messanger', component: Messanger },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
