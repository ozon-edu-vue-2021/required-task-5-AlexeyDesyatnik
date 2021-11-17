import Vue from 'vue';
import Router from 'vue-router';

import Products from '@/views/Products.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Products,
    },
    {
      path: '/cart',
      component: ShoppingCart,
    },
  ],
});
