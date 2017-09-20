import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Zoom from '@/components/Zoom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom,
    },
    {
      path: '*',
      name: '404',
      component: Hello,
    },
  ],
});
