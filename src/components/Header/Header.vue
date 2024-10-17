<template>
  <header class="container-fluid d-flex justify-content-between p-3 p-lg-5">
    <img :src="logo" alt="vue-logo" />
    <Navlinks />
    <div></div>
  </header>
</template>

<script>
import logo from '../../assets/Images/Vue.js.webp'
import Navlinks from './Navlinks.vue'

export default {
  components: { Navlinks },
  data() {
    return {
      logo,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  img {
    height: 8vh;
  }
}
</style>
