<template>
  <div>
    <header class="topbar">
      <div class="back" @click="goBack()">
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23289 0.190785C4.49385 -0.0663038 4.91381 -0.0631698 5.1709 0.197785C5.42799 0.458739 5.42485 0.878696 5.1639 1.13578L2.2819 3.97979H23.3369C23.7033 3.97979 24.0004 4.27684 24.0004 4.64328C24.0004 5.00973 23.7033 5.30679 23.3369 5.30679H2.2799L5.1619 8.15078C5.3307 8.31709 5.39797 8.56082 5.33834 8.79017C5.27872 9.01951 5.10127 9.19963 4.87284 9.26267C4.64441 9.32571 4.3997 9.26209 4.2309 9.09578L0.197895 5.11578C0.0712872 4.99116 -7.62939e-06 4.82094 -7.62939e-06 4.64328C-7.62939e-06 4.46563 0.0712872 4.29541 0.197895 4.17078L4.23289 0.190785Z" fill="white"/>
        </svg>
      </div>
      <input type="text" class="search" placeholder="Rechercher un restaurant ..." v-model="form.search" @keyup="searchEstablishment">
    </header>
    <div class="result_search">
      <h2>Résultat</h2>
        <search-card
          v-for="result in searchResults"
          :name="result.name"
          :thumbnail="result.thumbnail.path"
          :rating="result.rating"
          :tags="result.tags"
          @click.native="linkEstablishment(result.slug)"
        />
    </div>
  </div>
</template>
<script>
// Fait par Appoline
import Button from "../../components/Button";
import searchLayout from "../../layouts/searchLayout";
import SearchCard from "../../components/SearchCard";
import axios from "axios";
export default {
  layout: 'searchLayout',
  components: {
    Button,
    SearchCard
  },

  data() {
    return {
      form: {
        search: ''
      },
      searchResults: []
    }
  },

  methods: {
    goBack() {
      return this.$router.back()
    },
    linkEstablishment(slug) {
      this.$router.push('/bars/' + slug)
    },
    searchEstablishment() {
      axios.get('http://127.0.0.1:8000/api/search/' + this.form.search)
      .then((response) => {
        this.searchResults = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.topbar {
  height: 70px;
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  background: #232633;
  border-bottom: 1px solid #2C2E3F;
  .back {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 16px;
  }

}
.search {
  font-size: 14px;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding-left: 54px;
  background: transparent;
  color:white;
  &::placeholder {
    color:var(--textGray);
  }
}
.result_search {
  margin-top: 96px;
  padding: 0 16px;
  h2 {
    font-size: 18px;
    color:white;
    font-family: var(--title);
    margin-bottom: 24px;
  }
}
</style>
