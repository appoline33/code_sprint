<template>
  <div class="smallest_card">
    <div class="card_thumbnail">
      <img src="https://source.unsplash.com/random/300x190" alt="Image du bar l'austra">
    </div>
    <div class="card_datas">
      <span>7.9</span>
      <h3>L'austra</h3>
      <p>à 3,8 km - Cocktail</p>
    </div>
  </div>
</template>

<style>

</style>

<style>
.smallest_card {
  display: flex;
}
.card_thumbnail {
  margin-right: 16px;
}
.card_datas > span {
  padding: 4px 8px;
  background: #33A194;
  color:white;
  border-radius: 4px;
  font-size: 10px;
  margin-bottom: 8px;
  display: inline-block;
}
.card_datas > h3 {
  color:red;
  font-size: 16px;
  padding-bottom: 4px;
}
.card_datas > p {
  font-size: 12px;
  color:#777D97;
}
</style>