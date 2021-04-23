<template>
  <div class="product-card">
    <span class="quantity">{{ quantity }}x</span>
    <div class="datas">
      <h2>{{ name }}</h2>
      <p>{{ attribute }}</p>
    </div>
    <div class="price">
      <p>{{ price | price }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['name', 'price', 'attribute', 'thumbnail','quantity'],
  filters: {
    price(value) {
      return value + ' €'
    }
  }

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
  padding-top: 12px;
  padding-bottom: 8px;
  &:first-child {
    padding-top: 0;
  }
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
