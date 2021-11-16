<template>
  <div id="app">
    <h1>Каталог товаров</h1>
    <product-list />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList,
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
</style>
