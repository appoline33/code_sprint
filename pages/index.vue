<template>
  <div class="app_layout">
    <div class="establishment_block">
      <div class="head_block">
        <h2>A la une</h2>
      </div>
      <div class="block_listing">
        <VueSlickCarousel v-bind="settings" v-if="establishmentsFeatured.length">
          <div v-for= "item in establishmentsFeatured">
            <!-- {{establishmentsFeatured}} -->
            <!-- Définition des paramètres à afficher dans le carrousel de card-establishment -->
            <nuxt-link :to="'/bars/' + item.slug">  <!-- Lien vers la page du bar -->
              <card-establishment
                :name="item.name"
                :rating="item.rating"
                :thumbnail="item.thumbnail"
                :lat="item.lat"
                :long="item.long"
                :tags="item.tags"
              />
            </nuxt-link>
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <div class="establishment_block">
      <div class="head_block">
        <h2>Nos meilleures adresses</h2>
      </div>
      <div class="block_listing">
        <VueSlickCarousel v-bind="settings" v-if="establishmentsMoods.length">
          <div v-for= "item in establishmentsMoods">
            <!-- {{establishmentsMoods}} -->
            <!-- Définition des paramètres à afficher dans le carrousel de card-establishment -->
            <nuxt-link :to="'/bars/' + item.slug"> <!-- Lien vers la page du bar -->
              <card-establishment
                :name="item.name"
                :rating="item.rating"
                :thumbnail="item.thumbnail"
                :lat="item.lat"
                :long="item.long"
                :tags="item.tags"
              />
            </nuxt-link>
          </div>
        </VueSlickCarousel>
      </div>
    </div>


    <div class="establishment_block">
      <div class="block_listing">
        <nuxt-link v-for="item in establishments" :to="'/bars/' + item.slug" class="link-card">
          <SmallestCard
                        :name="item.name"
                        :rating="item.rating"
                        :thumbnail="item.thumbnail"
                        :lat="item.lat"
                        :long="item.long"
                        :tags="item.tags"
                        type="establishment"
          />
        </nuxt-link>
      </div>
    </div>




  </div>
  <!-- Second carrousel pour moods -->
</template>

<script>
// Fait par Appoline
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SmallestCard from "../components/SmallestCard";
import cardEstablishment from "../components/cardEstablishment.vue";
import axios from 'axios';
export default {
  data() {
    return {
      establishmentsFeatured: [],
      establishmentsMoods: [],
      establishments: [],
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
  },
  mounted() {
    axios.all([
      axios.get('http://localhost:8000/api/establishments/featured')
        .then((response) => {
          this.establishmentsFeatured = response.data;
        }),
      axios.get('http://localhost:8000/api/establishments/moods')
        .then((response) => {
          this.establishmentsMoods = response.data
        }),
      axios.get('http://localhost:8000/api/establishments')
        .then((response) => {
          this.establishments = response.data
        })
    ])
      .then(axios.spread((responseFeatured, responseMoods, response) => {
        this.establishmentsFeatured = responseFeatured.data;
        this.establishmentsMoods = responseMoods.data;
        this.establishments = response.data;
      }));

    // establishmentsFeatured
    /* axios.get('http://localhost:8000/api/establishments/featured')
      .then((response) => {
        this.establishmentsFeatured = response.data;
      });

    // establishmentsMoods
     axios.get('http://localhost:8000/api/establishments/moods')
       .then((response) => {
         this.establishmentsMoods = response.data
       }); */
  }
}

</script>

<style lang="scss">
@import './assets/scss/tools/variables';

.app_layout {
  padding: 0 16px;
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
.link-card {
  position: relative;
  padding-bottom: 24px;
  display: block;
}
</style>
