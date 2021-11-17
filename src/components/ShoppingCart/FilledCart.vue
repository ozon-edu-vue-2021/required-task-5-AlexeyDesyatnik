<template>
  <div>
    <h2>Вы выбрали:</h2>
    <div class="cartItems">
      <cart-item
        v-for="product in productsInCart"
        :key="product.id"
        :product="product"
      />
    </div>
    <button @click="checkout">Оформить заказ</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CartItem from './CartItem.vue';
export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['productsInCart', 'productQuantity']),
  },
  methods: {
    checkout() {
      const productsWithQuantities = this.productsInCart.map((product) => ({
        ...product,
        quantity: this.productQuantity(product.id),
      }));
      const json = JSON.stringify(productsWithQuantities);
      alert(json);
    },
  },
};
</script>

<style>
.cartItems {
  display: flex;
  flex-wrap: wrap;
}
</style>
