<template>
  <ul class="p-0">
    <li v-for="(product, index) in products" :key="index" class="text-white d-flex list-unstyled justify-content-between mb-2 fs-5">
      <strong class="d-flex justify-content-center align-items-center">{{ product.name }}</strong> 
      <span class="d-flex justify-content-center align-items-center">${{ product.price }}</span>
      <p class="m-0 d-flex justify-content-center align-items-center">{{ product.description }}</p>
      <button class="border-0 py-2 px-5 fw-bold fs-6 rounded text-white" @click="editProduct(index)">Edit</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editProduct(index) {
      this.$emit('edit-product', this.products[index], index)
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
    button {
        background-color: #41B883;
    }
}
</style>
