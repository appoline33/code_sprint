<template>
 <div>
   <div class="establishment_cover" :style="'background: url(' + establishmentPath + ') center center;background-size: cover'">
   </div>
   <div class="order_detail">
     <div class="datas">
       <h2>{{ establishmentName }}</h2>
       <p>
         <span v-if="order.status === 0" class="status_order error">Commande annulée</span>
         <span v-else class="status_order success">Commande terminée</span>
       - {{  order.date }}</p>
     </div>
     <div class="actions">
       <Button label="Fiche bar" type="small-white" @click.native="showEstablishment(order.establishment.slug)" />
     </div>
   </div>
   <div class="product_listing">
     <CardProduct v-for="product in order.products"
                  :name="product.name"
                  :price="product.price"
                  :thumbnail="product.thumbnail"
                  :quantity="product.quantity"
                  :attribute="product.attribute"
     />
     <div class="total">
       <span>Total: {{  order.total_amount | price }}</span>
     </div>
   </div>
 </div>
</template>
<script>
import CardProduct from "../../../components/CardProduct";
import axios from "axios";
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      order: [],
      establishmentName: '',
      establishmentPath: '',
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/order/' + this.$route.params.id)
      .then((response) => {
        this.order = response.data
        this.establishmentName = response.data.establishment.name // On arrive pas à accéder à l'objet establishment depuis order sans bug.
        this.establishmentPath = response.data.establishment.thumbnail.path // On arrive pas à accéder à l'objet establishment depuis order sans bug.
      })
  },
  methods: {
    showEstablishment(slug) {
      this.$router.push('/bars/' + slug)
    }
  },
  filters:  {
    price(value) {
      return value + ' €'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/tools/variables';

.establishment_cover {
  height:132px;
  width: 100%;
  background-size: cover;
}
.order_detail {
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  h2 {
    color:white;
    font-size: var(--font-title);
    font-family: var(--title);
    padding-bottom: 4px;
  }
  p {
    font-size: 13px;
    font-weight: 300;
    .status_order {
      &.success {
        color:#61BD73;
      }
      &.error {
        color:var(--reviews-bad)
      }
    }
  }
  .actions {
    margin-top: -48px;
  }
}
.product_listing {
  padding: 8px 24px;
}
.total {
  margin-top: 16px;
  span {
    color:white;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
