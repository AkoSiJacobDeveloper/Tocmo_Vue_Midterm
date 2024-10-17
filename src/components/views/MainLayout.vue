<template>
  <div class="container-fluid">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '../Header/Header.vue'
import HomePage from '../Pages/HomePage.vue'

export default {
  components: { Header, HomePage },
}
</script>

<style lang="scss" scoped>
div {
  background-image: url('@/assets/Images/wave.svg');
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
