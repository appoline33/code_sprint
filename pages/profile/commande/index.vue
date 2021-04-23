<template>
  <div class="listing_orders">
    <CardOrder v-for="order in orders"
      :thumbnail="order.establishment.thumbnail.path"
      :establishment="order.establishment.name"
      :date="order.date"
      :status="order.status"
      :id="order.id"
    />
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
    axios.get('http://127.0.0.1:8000/api/user/' + this.$store.state.userID + '/orders')
      .then((response) => {
      this.orders = response.data
        this.$store.commit('changeOrderNumber', response.data.length)
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
