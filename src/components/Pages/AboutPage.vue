<template>
  <main class="container-fluid text-white d-flex justify-content-center align-items-center p-2">
    <div class="container w-50 d-flex justify-content-center align-items-center subject-container">
        <p class="fw-bold text m-0">Vue Midterm Activity</p>
    </div>
    <div class="container w-50 instruction-container px-3 py-2">
      <div v-for="(step, index) in steps" :key="index">
        <h3 class="text-decoration-underline">{{ step.heading }}</h3>
        <ul>
          <li v-for="(instruction, idx) in step.instructions" :key="idx">
            {{ instruction.text }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          heading: 'Product Form Component (10 points):',
          instructions: [
            {
              text: 'Create a ProductForm.vue component where users can add new products.',
            },
            {
              text: 'The form should have input fields for the Product Name, Price, and Description, and a Submit Button.',
            },
            {
              text: 'When submitted, the form should emit an event to the parent container to add the product to a product list.',
            },
          ],
        },
        {
          heading: 'Product List Component (10 points):',
          instructions: [
            {
              text: 'Create a ProductList.vue component that displays all products in a list.',
            },
            { text: 'Each product should have an "Edit" button.' },
            {
              text: 'Implement event handlers in the parent component that handle events emitted from the Product List (e.g., editing a product).',
            },
            {
              text: 'Use Vue’s conditional rendering (v-if, v-else) to dynamically show form fields when editing a product.',
            },
          ],
        },
        {
          heading: 'State Management and SPA with Vue Route (30 points):',
          instructions: [
            {
              text: 'Use props to pass down product data from a parent component to the ProductList.vue component.',
            },
            {
              text: 'Use Vue’s reactivity system to update the product list when new products are added or modified.',
            },
            {
              text: '/products: Shows the product list and form to add products.',
            },
            {
              text: '/home: Displays your name, program, and a nav bar to navigate to different pages; you can also include a background image.',
            },
            { text: 'Implement links to navigate between these two routes.' },
            {
              text: 'Use the router-link and router-view components for navigation.',
            },
          ],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
main {
  .text {
    font-size: 3em;
  }
  .instruction-container {
    border-left: 1px solid #eee;
  }
}
</style>
