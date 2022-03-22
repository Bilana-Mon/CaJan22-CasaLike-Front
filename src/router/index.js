import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import stayApp from '../views/stay-app.vue';
import stayDetails from '../views/stay-details.vue';
import becomeHost from '../views/become-host.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/stay',
      name: 'stay',
      component: stayApp
    },
    {
      path: '/stay/:id',
      name: 'stay-details',
      component: stayDetails
    },
    {
      path: '/host',
      name: 'become-host',
      component: becomeHost
    },
 
  ]
})

export default router
