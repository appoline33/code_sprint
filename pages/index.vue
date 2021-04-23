<template>
  <div class="app_layout">
    <div class="establishment_block">
      <div class="head_block">
        <h2>A la une</h2>
        <a href="#">Tout voir</a>
      </div>
      <Radio />
      <Quantity />
      <div class="block_listing">
        <VueSlickCarousel v-bind="settings" v-if="establishmentsFeatured.length">
          <div v-for= "item in establishmentsFeatured">
            <!-- {{establishmentsFeatured}} -->

            <!-- Définition des paramètres à afficher dans le carrousel de card-establishment -->
            <card-establishment 
              :name="item.name"
              :rating="item.rating"
              :thumbnail="item.thumbnail"
              :lat="item.lat"
              :long="item.long"
              :tags="item.tags"
            />
          </div>

        <!-- Second carrousel pour moods -->
        <div class="block_listing">
        <VueSlickCarousel v-bind="settings" v-if="establishmentsMoods.length">
          <div v-for= "moods in establishmentsMoods">
            <!-- {{establishmentsMoods}} -->

            <!-- Définition des paramètres à afficher dans le carrousel establishmentMoods -->
            <card-establishment 
              :name="moods.name"
              :rating="moods.rating"
              :thumbnail="moods.thumbnail"
              :lat="moods.lat"
              :long="moods.long"
              :tags="moods.tags"
            />
          </div>

      </div>
    </div>
    <SmallestCard></SmallestCard>
  </div>
</template>  

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SmallestCard from "../components/SmallestCard";
import cardEstablishment from "../components/cardEstablishment.vue";
import Radio from "../components/Radio.vue";
import Quantity from "../components/Quantity.vue";
import axios from 'axios';
export default {
  data() {
    return {
      establishmentsFeatured: [],
      establishmentsMoods: [],

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
    Radio,
    Quantity,
  },
mounted() {
    // cardEstablishment
    axios.get('http://localhost:8000/api/establishments/featured')
      .then((response) => {
        this.establishmentsFeatured = response.data
      })

  // moods
    axios.get('http://localhost:8000/api/establishments/moods')
      .then((response) => {
        this.establishmentsMoods = response.data
      })
  }
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