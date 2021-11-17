<template>
  <div id="shoppingCart">
    <empty-cart v-if="isCartEmpty" />
    <filled-cart v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EmptyCart from '../components/ShoppingCart/EmptyCart.vue';
import FilledCart from '../components/ShoppingCart/FilledCart.vue';

export default {
  components: {
    EmptyCart,
    FilledCart,
  },
  computed: {
    ...mapGetters(['isCartEmpty']),
  },
};
</script>

<style></style>
