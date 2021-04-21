<template>
  <div class="app_layout">
    <div class="establishment_block">
      <div class="head_block">
        <h2>A la une</h2>
        <a href="#">Tout voir</a>
      </div>
      <div class="block_listing">
        <VueSlickCarousel v-bind="settings">
          <div>
            <card-establishment/>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
      <SmallestCard></SmallestCard>
      <Button></Button>
      <CartProduct></CartProduct>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SmallestCard from "../components/SmallestCard";
import cardEstablishment from "../components/cardEstablishment.vue";
import Line from '../components/CardProduct.vue';
export default {
  data() {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: false,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '20px'
      }
    }
  },
  components: {
    SmallestCard,
    cardEstablishment,
    VueSlickCarousel,
    Line,
  },
}

</script>

<style lang="scss">
@import './assets/scss/tools/variables';

.app_layout {
  padding: 0px 16px;
  width: 100vw;
  overflow-x: hidden;
}
.establishment_block {
  margin-bottom: var(--space-xlarge);
  .head_block {
    margin-bottom: var(--space-large);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: var(--font-title);
      font-family: var(--title);
      color:white;
      font-weight: bold;
    }
    a {
      font-size: var(--font-small);
      color:var(--textGray);
    }
  }
}
</style>
