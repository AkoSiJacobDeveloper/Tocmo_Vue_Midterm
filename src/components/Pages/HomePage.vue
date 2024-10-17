<template>
  <main
    class="container-fluid d-flex justify-content-center align-items-center text-white h-50"
  >
    <div class="textInfo mt-5">
      <p class="fw-bold">Paul Jacob Tocmo</p>
      <p class="text-center">Bachelor of Science in Information Technology</p>
      <p class="text-center">3rd Year - <span class="text-info">Web Development</span></p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/Styles/Styless.scss';
main {
  .textInfo {
    p {
      font-size: 10rem;
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
