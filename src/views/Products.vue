<template>
  <div id="productList">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
#productList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
