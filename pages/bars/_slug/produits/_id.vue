<template>
  <div>
    <div class="header_establishment">
      <VueSlickCarousel v-bind="settings" v-if="product.thumbnails">
        <div v-for= "item in product.thumbnails">
          <img :src="item.path" :alt="'Image de couverture du produit: ' + product.name">
        </div>
      </VueSlickCarousel>
    </div>
    <div class="establishment_head">
      <h2>{{product.name}}</h2>
      <p>{{  product.description }}</p>
    </div>
    <div class="establishment_block">
      <div class="block_listing">
        <Radio v-for="attribute in product.variants" :label="attribute.name" radio-name="attribute" :value="attribute.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import establishmentLayout from "../../../../layouts/establishmentLayout";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import axios from "axios";
import Radio from "../../../../components/Radio";
import Button from "../../../../components/Button";
export default  {
  layout: 'establishmentLayout',
  components: {
    VueSlickCarousel,
    Radio,
    Button
  },

  data() {
    return {
      product: [],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      if(this.scrollPosition >= 350) {
        this.$store.commit('changeTopbar', true)
      } else {
        this.$store.commit('changeTopbar', false)
      }
    }
  },

  mounted() {
    axios
      .get('http://localhost:8000/api/product/' + this.$route.params.id)
      .then((response) => {
        this.product = response.data
        this.$store.commit('changeEstablishmentName', response.data.name)
        this.$store.commit('changeEstablishmentCover', response.data.thumbnails)
      }).catch((error) => {
      if(error.response.status === 404) {
        this.$router.push('/')
      }
    })
  },

  filters: {
    kilometers: function (value) {
      return 'à ' + value + ' km'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';
.header_establishment {
  height:350px;
  .slick-container {
    height: 100%!important;
  }
  .slick-slider, .slick-list, .slick-track {
    height: 100%!important;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.establishment_head {
  border-radius: 32px 32px 0 0;
  background: var(--background);
  margin-top: -64px;
  padding:32px 24px;
  position: relative;
  z-index: 9;
  h2 {
    color:white;
    font-family: var(--title);
    font-size: var(--font-title);
    padding-bottom: var(--space-small);
  }
  p {
    font-size: var(--font-small);
    padding-top: var(--space-medium);
    line-height: 18px;
  }
}
.establishment_block {
  padding: 0 16px;
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
