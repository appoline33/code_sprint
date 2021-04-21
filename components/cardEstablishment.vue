<!-- "template" correspond au body -->
<template>

<!-- div général contenant tout le composant -->
<div class="cardEstablishment">

    <!-- Image du composannt -->
    <!-- <div class="cardEstablishment_image">
        <img :src= "thumbnails[0].path" alt="Image du bar">
    </div> -->

    <div class="cardEstablishment_image">
      {{ thumbnails }}
    </div>


    <!-- Description sous l'image -->
    <div class="cardEstablishment_description">

        <!-- Informations du bar -->
        <div class="cardEstablishment_title">
            <!-- Nom du bar -->
            <h2>{{name}}</h2>
            <!-- Localisation / Spécialités -->
            <p>à 3km - Bières - Vin</p>
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

    export default{
        props: ['name', 'rating', 'thumbnails'],
    }
    import Badge from "./Badge";


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