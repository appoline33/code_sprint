<!-- "template" correspond au body -->
<template>

<!-- Div générale de Quantity -->
<div class="quantity">

    <!-- Éléments à l'intérieur de Quantity -->
    <div class="quantity_elements">
        <span>-</span>
        <span>2</span>
        <span>+</span>
    </div>

</div>

</template>


<!-- Script vue.js -->
<script>

    export default{}

</script>


<!-- Style CSS / SASS -->
<style lang="scss" scoped>
@import './assets/scss/tools/variables';

// Div générale de Quantity
.quantity{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    width: 25%;
    background-color: #222431;
    border-radius: 4px;

    // Éléments à l'intérieur de Quantity
    .quantity_elements{
        span{
            font-family: var(--text);
            font-size: var(--font-small);
            font-weight: 300;
            margin: var(--space-small);
        }
        span:nth-child(2){
            color: white;
        }
    }
}

</style> 

<!-- Déclarer une variable en css
color : var(--textGray); -->

<!-- Border radius de 4px -->