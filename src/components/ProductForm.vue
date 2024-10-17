<template>
  <main
    class="container-fluid d-flex p-4 justify-content-center align-items-center"
  >
    <div class="container w-50">
      <h1 class="text-white text-center">Product Form</h1>
      <form @submit.prevent="handleSubmit" class="d-flex flex-column p-4 gap-2">
        <label for="name" class="text-white">Product Name:</label>
        <input
          class="p-3 rounded"
          id="name"
          v-model="productName"
          type="text"
          placeholder="e.g., Apple iPhone 14"
          required
        />

        <label for="price" class="text-white">Product Price:</label>
        <input
          class="p-3 rounded"
          id="price"
          v-model="productPrice"
          type="number"
          placeholder="e.g., 299.99"
          required
        />

        <label for="description" class="text-white">Product Description:</label>
        <textarea
          v-model="productDescription"
          placeholder="Describe the product...."
          rows="5"
          cols="30"
          class="p-3 rounded"
          id="description"
          name="description"
          required
        ></textarea>

        <button class="border-0 p-3 fw-bold fs-4 rounded text-white" type="submit">
          {{ isEditing ? 'Update Product' : 'Add Product' }}
        </button>
      </form>
    </div>
    <div class="container w-50">
      <h1 class="text-white text-center">Product List</h1>
      <div class="product-holder p-4">
        <ProductListVue :products="products" @edit-product="editProduct" />
      </div>
    </div>
  </main>
</template>

<script>
import ProductListVue from './ProductList.vue'

export default {
  components: { ProductListVue },
  data() {
    return {
      products: [], // Initialize the products array
      isEditing: false,
      productName: '',
      productPrice: '',
      productDescription: '',
      editIndex: null,
    }
  },
  methods: {
    handleSubmit() {
      const productData = {
        name: this.productName,
        price: parseFloat(this.productPrice), // Ensure price is a number
        description: this.productDescription,
      }
      if (this.isEditing) {
        this.products[this.editIndex] = productData // Update existing product
      } else {
        this.products.push(productData) // Add new product
      }
      this.resetForm()
    },
    resetForm() {
      this.productName = ''
      this.productPrice = ''
      this.productDescription = ''
      this.isEditing = false
      this.editIndex = null // Reset edit index
    },
    editProduct(product, index) {
      this.productName = product.name
      this.productPrice = product.price
      this.productDescription = product.description
      this.isEditing = true
      this.editIndex = index // Store the index of the product being edited
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  form {
    border: 1px solid #eee;
    border-radius: 5px;

    button {
        background-color: #0066FF;
    }
  }

  .product-holder {
    border: 1px solid white;
    height: 510px;
    width: 100%;
    border-radius: 5px;
  }
}
</style>
