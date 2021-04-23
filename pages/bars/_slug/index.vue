<template>
 <div>
 <div class="header_establishment">
<VueSlickCarousel v-bind="settings" v-if="establishment.thumbnails">
  <div v-for="thumbnail in establishment.thumbnails"><img :src="thumbnail.path" ></div>
</VueSlickCarousel>
   </div>

    <div class="establishment_head">
     <h2>{{establishment.name}}</h2>
     <span v-for="tag in establishment.tags">
       {{tag.name}}
     </span>
     <p>{{establishment.description}}</p>
   </div>
   <div class="establishment_block" v-for="category in establishment.categories">
     <div class="head_block">
       <h2>
         {{category.name}}
       </h2>
     </div>
     <div class="block_listing">

   <nuxt-link v-for="product in category.products"
              :to="'/bars/' + $route.params.slug + '/produits/' + product.id">
     <smallest-card
       :name="product.name"
       :thumbnail="product.thumbnail"
       :price="product.price"
       :description="product.description"
       type="product" />
   </nuxt-link>
     </div>

   </div>
 </div>
</template>

<script>
// Fait par Juliette
import establishmentLayout from "../../../layouts/establishmentLayout";
import SmallestCard from "../../../components/SmallestCard";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import axios from "axios";
export default  {
  layout: 'establishmentLayout',
  data() {
    return {
      establishment:[],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: false,
        arrows: false,
        dots: false,
      }
    }
  },
components:{
  SmallestCard,
  VueSlickCarousel,
  },
  beforeMount () {


window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/establishment/' + this.$route.params.slug)
      .then((response) => {
       this.establishment = response.data
        this.$store.commit('changeEstablishmentName', response.data.name)
        this.$store.commit('changeEstablishmentThumbnail', response.data.thumbnail.path)
      })
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
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';
.header_establishment {
  height:350px!important;
  overflow: hidden;
  .slick-container {
    height: 100%!important;
  }
  .slick-slider, .slick-list, .slick-track {
    height: 350px!important;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

.establishment_head {
  border-radius: 32px 32px 0 0;
  background: var(--background);
  margin-top: -64px;
  padding:32px 24px;
  position: relative;
  z-index: 99;
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
