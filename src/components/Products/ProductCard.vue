<template>
  <div class="productCard">
    <img
      :src="require(`@/assets/images/${product.imageSrc}`)"
      class="productImage"
    />
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
  border-radius: 16px;
  margin: 16px;
  padding: 8px;
  width: 250px;
}

.productImage {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
</style>
