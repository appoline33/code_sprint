<template>
  <div class="smallest_card">
    <div class="card_thumbnail">
      <img src=thumbnails alt="Image du bar">
    </div>
    <div class="card_datas">
      <Badge />
      <h3>{{name}}</h3>
      <p>{{description}}</p>
      <p>{{price}}</p>
    </div>
  </div>
</template>
<script>
import Badge from "./Badge";
export default  {
    props:['name', 'thumbnail', 'price', 'description'],
  components: {
    Badge,
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.smallest_card {
  display: grid;
  grid-template-columns: minmax(130px, 50%) auto;
  gap: 0px 16px;
  grid-template-areas:
    "thumbnail content";
  max-height: 100px;
  margin-bottom:24px;

  &:last-child {
    margin-bottom: 0;
  }
  .card_thumbnail {
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
    img {
      object-fit: cover;
    }
  }
  .card_datas {
    h3 {
      color:white;
      font-size: var(--font-body);
      font-family: var(--title);
      padding-bottom: var(--space-small)
    }
    p {
      font-size:var(--font-small);
      color:var(--textGray);
    }
  }

}
</style>
