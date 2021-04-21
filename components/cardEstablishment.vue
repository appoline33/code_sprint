<!-- Correspond au body -->
<template>

<div class="cardEstablishment">

    <!-- Image de la carte -->
    <div class="cardEstablishment_image">
        <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?cs=srgb&dl=pexels-chris-f-1283219.jpg&fm=jpg" alt="Image du bar">
    </div>

    <!-- Description sous l'image -->
    <div class="cardEstablishment_description">

        <div class="cardEstablishment_title">
            <!-- Nom du bar -->
            <h2>Nom du bar</h2>
            <!-- Localisation / Spécialités -->
            <p>à 3km - Bières - Vin</p>
        </div>

      <Badge />
        <!-- Note du bar -->
        <div class="cardEstablishment_note">
            <span>7.9</span>
        </div>

    </div>

</div>


</template>


<!-- Script vue.js -->
<script>
import Badge from "./Badge";

    export default{
      components: {
        Badge,
      }
    }

</script>


<!-- Style CSS / SASS -->
<style lang="scss" scoped>
@import './assets/scss/tools/variables';

// Mise en forme de la carte
.cardEstablishment{
    width: 100%;
    height: 233px;
    overflow: hidden;
    // left: 19px;
    // top: 132px;
}

// Mise en forme de l'image
.cardEstablishment_image{
    // left: 0%;
    // right: 0%;
    // top: 0%;
    bottom: 18.45%;

        img{
            width: 100%;
            height: 190px;
            border-radius: 4px;
        }
}

// Mise en forme de la description
.cardEstablishment_description{
    // display: flex;
    // flex-direction: row;

        // .cardEstablishment_title{
        //     display: flex;
        //     flex-direction: column;
        //     align-items: flex-start;
        //     padding: 0px;

        //     width: 100px;
        //     height: 35px;
        //     left: 0px;
        //     top: 198px;

            // display: flex;
            // flex-direction: column;
            // align-items: flex-start;
            // width: 101px;
            // height: 35px;
            // top: 198px;

                // h2{
                //     position: static;
                //     width: 82px;
                //     height: 19px;
                //     left: 0px;
                //     top: 0px;

                //     font-family: var(--title);
                //     font-size: var(--font-body);
                //     font-weight: 600;
                //     line-height: 19px;
                //     color: black ;

                //     flex: none;
                //     order: 0;
                //     flex-grow: 0;
                //     margin: 4px 0px;
                // }

        //         p{
        //             position: static;
        //             width: 100px;
        //             height: 12px;
        //             left: 0px;
        //             top: 23px;

        //             font-family: var(--text);
        //             font-weight: 400;
        //             font-size: var(--font-small);
        //             color: var(--textGray);

        //             flex: none;
        //             order: 1;
        //             flex-grow: 0;
        //             margin: 4px 0px;

        //         }
        // }

        // .cardEstablishment_note{
        //     display: flex;
        //     flex-direction: row;
        //     align-items: flex-start;
        //     padding: 4px 8px;

        //     width: 28px;
        //     height: 18px;
        //     left: 279px;
        //     top: 198px;

        //     background: var(--background-note);
        //     border-radius: 4px;

        //     span{
        //         position: static;
        //         width: 12px;
        //         height: 10px;
        //         left: 8px;
        //         top: 4px;

        //         font-family: var(--text);
        //         font-weight: 400;
        //         font-size: var(--font-small);
        //         line-height: 10px;
        //         text-align: right;
        //         color: white;
        //     }

        // }

}


</style>

<!-- Déclarer une variable en css
color : var(--textGray); -->

<!-- Border radius de 4px -->
