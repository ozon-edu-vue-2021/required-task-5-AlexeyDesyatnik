<template>
  <div id="app">
    <h1>Интернет-магазин</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Каталог</router-link>
        </li>
        <li>
          <router-link to="/cart">Корзина</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
