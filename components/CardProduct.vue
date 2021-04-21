<template>
  <div class="product-card">
    <span class="quantity">1x</span>
    <div class="datas">
      <h2>Vin Blanc</h2>
      <p>25cl - Tariquet Classique</p>
    </div>
    <div class="price">
      <p>8,50€</p>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge";
export default {

}
</script>

<style  lang="scss" scoped>
@import './assets/scss/tools/variables';

.product-card{
  background:var(--background);
  border-bottom: 1px solid #2C2E3F;
  display: grid;
  grid-template-columns: 24px 1fr 48px;
  grid-column-gap: 8px;
  grid-template-areas:
    "quantity product price";
  align-items: flex-start;
  padding-bottom: 12px;
}

.quantity {
  font-family: var(--title);
  color: var(--textGray);
  font-size: 16px;
  grid-area:quantity;
}

.datas {
  grid-area:product;
  h2{
    font-family: var(--title);
    color: white;
    font-size: var(--font-small);
    padding-bottom: var(--space-small)
  }
  p{
    font-family: var(--title);
    color: var(--textGray);
    font-size: 12px;
  }
}
.price {
  text-align: right;
  font-family: var(--title);
  color: var(--textGray);
  font-size: 14px;
  grid-area:price;
}

</style>