<!-- "template" correspond au body -->
<template>

<!-- div général contenant tout le composant -->
<div class="cardEstablishment">

    <!-- Image du composannt -->
    <!-- {{thumbnail}} -->
    <div class="cardEstablishment_image">
        <img :src="thumbnail.path" :alt="'Image du bar : ' + name">
    </div>

    <!-- Description sous l'image -->
    <div class="cardEstablishment_description">

        <!-- Informations du bar -->
        <div class="cardEstablishment_title">
            <!-- Nom du bar -->
            <h2>{{name}}</h2>
            <!-- Localisation -->
          <span>{{ distanceEstablishment | kilometers }} -</span>
            <!-- Tags : correspond aux "spécialités du bar" -->
            <span v-for= "tags in tags">
                <span>{{tags.name}}</span>
            </span>
        </div>

    <!-- Badge correspond au composant affichant la note du bar en question -->
      <Badge
        :rating=rating
      />

    </div>

</div>



</template>


<!-- Script vue.js -->
<script>
// Fait par Appoline
    import turf from "turf";
    import Badge from "./Badge";
    export default{
        // Récupération des paramètres définis dans index.vue
        props: ['name', 'rating', 'thumbnail', 'long', 'lat', 'tags'],

      data() {
          return {
            distanceEstablishment: ''
          }
      },
      components: {
          Badge
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
        }
      }

    }

</script>


<!-- Style CSS / SASS -->
<style lang="scss" scoped>
@import './assets/scss/tools/variables';


// Mise en forme de l'image
.cardEstablishment_image img{
    height: 190px;
    border-radius: 4px;
    margin-bottom: var(--space-small);

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
}

// Mise en forme de la description
.cardEstablishment_description{
    display: flex;
    justify-content: space-between;

        h2{
            padding-bottom: var(--space-small);
            font-family: var(--title);
            font-size: var(--font-body);
            font-weight: 600;
            color: white;
        }

        p{
            font-family: var(--text);
            font-size: var(--font-small);
            font-weight: 400;
            color: var(--textGray);
        }

}


</style>

<!-- Déclarer une variable en css
color : var(--textGray); -->

<!-- Border radius de 4px -->
