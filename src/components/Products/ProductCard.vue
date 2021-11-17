<template>
  <div class="productCard">
    <img
      :src="require(`@/assets/images/${product.imageSrc}`)"
      class="productImage"
    />
    <p>Артикул: {{ product.id }}</p>
    <p>Название: {{ product.name }}</p>
    <p>Цена: {{ product.price }} руб.</p>

    <div v-if="!isProductInCart(product.id)" class="productQuantityControls">
      <p>&nbsp;</p>
      <button @click="increaseQuantity(product.id)">В корзину</button>
    </div>
    <div v-else class="productQuantityControls">
      <p>В корзине: {{ productQuantity(product.id) }} шт.</p>
      <button @click="decreaseQuantity(product.id)">-1</button>
      <button @click="increaseQuantity(product.id)">+1</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters(['productQuantity', 'isProductInCart']),
  },
  methods: {
    ...mapActions(['increaseQuantity', 'decreaseQuantity']),
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
