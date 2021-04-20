<template>
  <div class="container">
    <div>
      <Logo />
<<<<<<< HEAD
      <SmallestCard></SmallestCard>


=======
      <card-establishment></card-establishment>
>>>>>>> 4b83acd50a6b6c82739f07acaab6b217e7c0d528
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
<<<<<<< HEAD
import SmallestCard from "../components/SmallestCard";

export default {
  components: {
    SmallestCard,
  }
=======

// Components cardEstablishment (Appoline)
import cardEstablishment from "../components/cardEstablishment.vue";

export default {
  components: {
    cardEstablishment,
  }
}

</script>

<style lang="scss"> 
@import './assets/scss/tools/variables';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
>>>>>>> 4b83acd50a6b6c82739f07acaab6b217e7c0d528
}
</script>



<style lang="scss">
@import './assets/scss/tools/variables';

.title {
  color: var(--textGray);
}

</style>
