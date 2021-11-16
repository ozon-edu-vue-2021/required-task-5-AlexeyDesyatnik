import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { productFromApiData } from './product';
const apiUrl = 'https://random-data-api.com/api/food/random_food?size=30';

export default new Vuex.Store({
  state: () => ({
    products: [],
  }),
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts;
    },
  },
  actions: {
    async fetchProducts(context) {
      const response = await fetch(apiUrl);
      const json = await response.json();
      const products = json.map(productFromApiData);
      context.commit('setProducts', products);
    },
  },
});
