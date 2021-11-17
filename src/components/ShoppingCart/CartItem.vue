<template>
  <div class="cartItem">
    <img
      :src="require(`@/assets/images/${product.imageSrc}`)"
      class="productImage"
    />
    <p>Артикул: {{ product.id }}</p>
    <p>Название: {{ product.name }}</p>
    <p>Цена: {{ product.price }} руб.</p>

    <div class="productQuantityControls">
      <p>В корзине: {{ productQuantity(product.id) }} шт.</p>
      <button @click="decreaseQuantity(product.id)">-1</button>
      <button @click="increaseQuantity(product.id)">+1</button>
      <button @click="removeFromCart(product.id)">Удалить</button>
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
    ...mapGetters(['productQuantity']),
  },
  methods: {
    ...mapActions(['increaseQuantity', 'decreaseQuantity', 'removeFromCart']),
  },
};
</script>

<style scoped>
.cartItem {
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
