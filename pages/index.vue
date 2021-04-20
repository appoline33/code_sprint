<template>
  <div class="container">
    <div>
      <Logo />
      <SmallestCard></SmallestCard>


      <h1 class="title">
        DrinklyFront
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SmallestCard from "../components/SmallestCard";

export default {
  components: {
    SmallestCard,
  }
}
</script>



<style lang="scss">
@import './assets/scss/tools/variables';

.title {
  color: var(--textGray);
}

</style>
