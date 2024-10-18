<template>
  <main
    class="container-fluid text-white">
    <div class="textInfo mt-5 d-flex justify-content-center align-items-center flex-column">
      <p class="fw-bold m-0">Paul Jacob Tocmo</p>
      <p class="text-center">Bachelor of Science in Information Technology</p>
      <p class="text-center">3rd Year - <span class="text-info">Web Development</span></p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/Styles/Styless.scss';
main {
  height: 100vh;
  .textInfo {
    p {
      font-size: 5em;
    }
    p:nth-child(2) {
      font-size: 1.8em;
      font-family: $second-font;
    }
    p:nth-child(3) {
      font-size: 1.4em;
      font-family: $second-font;
    }
  }
}
</style>
