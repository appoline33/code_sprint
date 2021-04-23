<template>
  <div class="smallest_card">
    <div class="card_thumbnail">
      <img :src="thumbnail.path" :alt="type === 'establishment' ? 'Image du bar: ' : 'Image du produit: ' + name">
    </div>
    <div class="card_datas">
      <Badge :rating="rating" v-if="type === 'establishment'"/>
      <h3>{{name}}</h3>
      <span v-if="type === 'establishment' ">{{ distanceEstablishment | kilometers }} -</span>
      <span v-for="(tag, index) in tags">
        <span>{{tag.name}}</span><span v-if="index+1 < tags.length">, </span>
      </span>
      <p v-if="type === 'product'">{{description}}</p>
      <p v-if="type === 'product'">{{price | price}}</p>
    </div>
  </div>
</template>
<script>
// Fait par Juliette
import Badge from "./Badge";
import turf from "turf";
export default  {
  props:['name', 'thumbnail', 'price', 'description','type', 'rating','tags', 'long', 'lat'],
  components: {
    Badge,
  },
  data() {
    return {
      distanceEstablishment: ''
    }
  },
  created() {
    if (typeof global.navigator === 'undefined') global.navigator = {};
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          var from = {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [position.coords.longitude, position.coords.latitude]
            }
          };
          var to = {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [this.$props.long, this.$props.lat]
            }
          };
          this.distanceEstablishment = turf.distance(from, to, 'kilometers').toFixed([2]);
        }
      );
    }
  },

  filters: {
    kilometers: function (value) {
      return 'à ' + value + ' km'
    },
    price: function(value) {
      return value + ' €'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.smallest_card {
  display: grid;
  grid-template-columns: minmax(130px, 50%) auto;
  gap: 0px 16px;
  grid-template-areas:
    "thumbnail content";
  max-height: 100px;
  margin-bottom:24px;

  &:last-child {
    margin-bottom: 0;
  }
  .card_thumbnail {
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .card_datas {
    h3 {
      color:white;
      font-size: var(--font-body);
      font-family: var(--title);
      padding-bottom: var(--space-small)
    }
    p {
      font-size:var(--font-small);
      color:var(--textGray);
    }
  }

}
</style>
