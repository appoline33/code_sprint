<template>
  <div class="card_search">
    <div class="card_thumb">
     <img :src="thumbnail" :alt="'Image du bar:' + name">
    </div>
    <div class="card_datas">
      <h3>{{ name }}</h3>
      <div class="meta-data">
            <span class="rating">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77989 10.5C8.69993 10.5003 8.62106 10.4815 8.54989 10.445L5.99989 9.10999L3.44989 10.445C3.28096 10.5338 3.07619 10.5187 2.92211 10.4061C2.76803 10.2935 2.69151 10.1029 2.72489 9.915L3.22489 7.1L1.16489 5.1C1.03392 4.9693 0.985836 4.77695 1.03989 4.6C1.09902 4.41871 1.25611 4.28683 1.44489 4.26L4.29489 3.845L5.54989 1.28C5.63344 1.1075 5.80823 0.99794 5.99989 0.99794C6.19156 0.99794 6.36635 1.1075 6.44989 1.28L7.71989 3.83999L10.5699 4.255C10.7587 4.28183 10.9158 4.41371 10.9749 4.595C11.029 4.77195 10.9809 4.9643 10.8499 5.095L8.78989 7.095L9.28989 9.91C9.32634 10.1014 9.24829 10.2965 9.08989 10.41C8.99935 10.4734 8.89034 10.5051 8.77989 10.5Z" fill="#FACD5D"/></svg>
            {{  rating }}</span>
          <span v-for="(tag, index) in tags">
            <span>{{tag.name}}</span><span v-if="index+1 < tags.length">, </span>
          </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'thumbnail', 'rating', 'tags']
}
</script>
<style lang="scss">
@import './assets/scss/tools/variables';
.card_search {
  display: flex;
  border-bottom: 1px solid #2C2E3F;
  padding: 12px 0;
  &:first-child {
    padding-top: 0;
  }
  .card_thumb {
    width:48px;
    height: 48px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 12px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card_datas {
    h3 {
      color:white;
      font-family: var(--title);
      padding-bottom: 8px;
    }
    .meta-data {
      display: flex;
      align-items: center;
      .rating {
        padding-right: 8px;
      }
    }
  }
}
</style>
