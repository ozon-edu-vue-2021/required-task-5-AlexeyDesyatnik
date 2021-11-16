<template>
  <div class="productCard">
    <p>Артикул: {{ product.id }}</p>
    <p>Название: {{ product.name }}</p>
    <p>Цена: {{ product.price }} руб.</p>
    <button>В корзину</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.productCard {
  border: 3px solid rgb(115, 163, 172);
  border-radius: 8px;
  margin: 16px;
  padding: 8px;
  width: 250px;
}
</style>
