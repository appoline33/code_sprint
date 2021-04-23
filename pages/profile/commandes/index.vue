<template>
  <div class="listing_orders">
    <CardOrder v-for="order in orders"
    establishment="Grizzly"
    :date="order.date"
    :status="order.status"
    />
      <div class="roads_path">
      <h2>Drink' Road</h2>
      <p>Cartographie de vos différentes commandes</p>
    </div>

  
     
  </div>
</template>

<script>
import orderLayout from "../../../layouts/orderLayout";
import CardOrder from "../../../components/CardOrder";
import axios from "axios"
export default {
  layout: 'orderLayout',
  data(){
    return{
      orders:[]
    }
  },
  components: {
    CardOrder,
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/user/antoine.bellment@gmail.com/orders')
      .then((response) => {
      this.orders = response.data
      })
  },
}

</script>

<style lang="scss">
@import './assets/scss/tools/variables';
.listing_orders {
  margin-top: 88px;
  padding: 0px 16px;
}
</style>
  