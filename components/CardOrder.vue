<template>
  <div>
    <div class="card_order">
      <div class="order_establishment_thumb">
        <img src="https://source.unsplash.com/random/100x100" alt="">
      </div>
      <div class="order_establishment">
        <h2>{{establishment}}</h2>
        <span>3 boissons</span>
        <span>{{ date }}</span>
        <span v-if="status===0">Annulée</span>
           <span v-else>Terminée</span>
      </div>
      <div class="order_actions">
        <Button label="Voir" type="small" to="978"/>
      </div>
    </div>
  
  </div>
</template>
<script>
import Button from "./Button";
export default {
  props:['establishment', 'date','status'],
  components: {
    Button
  },
}
</script>

<style lang="scss">
@import './assets/scss/tools/variables';
.card_order {
  display: grid;
  grid-template-columns: 64px 1fr 54px;
  grid-column-gap: 8px;
  grid-template-areas:
    "thumb datas actions";
  padding:12px 0;
  border-bottom: 1px solid #2C2E3F;
  &:first-child {
    padding-top: 0;
  }
}
.order_establishment_thumb {
  grid-area: thumb;
  width: 100%;
  height:48px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.order_establishment {
  grid-area: datas;
  h2 {
    color:white;
    font-size: 16px;
    font-family: var(--title);
    padding-bottom: var(--space-small);
  }
  span {
    font-size: 14px;
    display: block;
    width: 100%;
  }
}
.order_actions {
  grid-area: actions;
}
.roads_path {
  margin-top:24px;
  h2 {
    color:white;
    font-size: 18px;
    font-family: var(--font-title);
    padding-bottom:8px;
  }
  p {
    font-size: 12px;
  }
}
</style>
  