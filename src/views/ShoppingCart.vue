<template>
  <div id="shoppingCart">
    <p>{{ this.$store.state.shoppingCart }}</p>
    <empty-cart />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EmptyCart from '../components/ShoppingCart/EmptyCart.vue';

export default {
  components: {
    EmptyCart,
  },
  computed: {
    ...mapGetters(['productsInCart']),
  },
};
</script>

<style></style>
