<template>
  <div id="app">
    <h2>Hi there</h2>
    <p>{{ products }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
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

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
