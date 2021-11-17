<template>
  <div class="productCard">
    <img
      :src="require(`@/assets/images/${product.imageSrc}`)"
      class="productImage"
    />
    <p>Артикул: {{ product.id }}</p>
    <p>Название: {{ product.name }}</p>
    <p>Цена: {{ product.price }} руб.</p>
    <p v-if="isProductInCart(product.id)">
      В корзине: {{ productQuantity(product.id) }} шт.
    </p>
    <p v-else>&nbsp;</p>
    <div v-if="!isProductInCart(product.id)" class="productQuantityControls">
      <button @click="increaseQuantity(product.id)">В корзину</button>
    </div>
    <div v-else class="productQuantityControls">
      <button @click="decreaseQuantity(product.id)">-1</button>
      <button @click="increaseQuantity(product.id)">+1</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters(['productQuantity']),
    isProductInCart() {
      return (id) => this.productQuantity(id) > 0;
    },
    isOnlyOneInCart() {
      return (id) => this.productQuantity(id) === 1;
    },
  },
  methods: {
    changeQuantity(id, delta) {
      const oldQuantity = this.productQuantity(id);
      this.$store.commit('setProductQuantity', {
        id,
        quantity: oldQuantity + delta,
      });
    },
    increaseQuantity(id) {
      this.changeQuantity(id, 1);
    },
    decreaseQuantity(id) {
      this.changeQuantity(id, -1);
    },
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
