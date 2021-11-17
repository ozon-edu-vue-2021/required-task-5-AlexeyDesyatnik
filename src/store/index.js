import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { productFromApiData } from './product';
const apiUrl = 'https://random-data-api.com/api/food/random_food?size=30';

export default new Vuex.Store({
  state: () => ({
    products: [],
    shoppingCart: {},
  }),
  getters: {
    productQuantity: (state) => (id) => state.shoppingCart[id] ?? 0,
    isProductInCart: (_, getters) => (id) => getters.productQuantity(id) > 0,
    productsInCart: (state) =>
      Object.keys(state.shoppingCart).map((cartProduct) => {
        return state.products.find((product) => product.id === cartProduct.id);
      }),
    product: (state) => (id) =>
      state.products.find((product) => product.id === id),
  },
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts;
    },
    setProductQuantity(state, { id, quantity }) {
      if (quantity > 0) {
        Vue.set(state.shoppingCart, id, quantity);
      } else {
        Vue.delete(state.shoppingCart, id);
      }
    },
  },
  actions: {
    async fetchProducts(context) {
      const response = await fetch(apiUrl);
      const json = await response.json();
      const products = json.map(productFromApiData);
      context.commit('setProducts', products);
    },
    changeQuantity(context, { id, delta }) {
      const oldQuantity = context.getters.productQuantity(id);
      context.commit('setProductQuantity', {
        id,
        quantity: oldQuantity + delta,
      });
    },
    increaseQuantity(context, id) {
      context.dispatch('changeQuantity', { id, delta: 1 });
    },
    decreaseQuantity(context, id) {
      context.dispatch('changeQuantity', { id, delta: -1 });
    },
  },
});
