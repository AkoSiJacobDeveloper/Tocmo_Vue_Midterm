<template>
  <nav class="d-flex justify-content-center align-items-center">
    <ul class="d-flex gap-4">
      <li class="list-unstyled" v-for="(link, index) in links" :key="index">
        <router-link
          class="text-decoration-none text-white fs-3 p-2 nav-link"
          :to="link.href"
          >{{ link.text }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: { name: 'Home' }, text: 'HOME' },
        { href: { name: 'About' }, text: 'ABOUT' },
        { href: { name: 'Contact' }, text: 'CONTACT' },
        { href: { name: 'Activity' }, text: 'ACTIVITY' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-link {
  transition: transform 0.5s ease-in-out;
  &:hover {
    background-color: #002233;
    border-radius: 5px;
    transform: translateY(-5px);
  }
}
</style>
