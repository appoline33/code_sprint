<template>
  <button class="Button">{{label}}</button>
</template>

<script>
import Badge from "./Badge";
export default {
 props:['label','type']
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.Button {

  background: white;
  border-radius: 4px;
  font-size: 16px;
  font-family: var(--title);
  color: var(--background);
  padding: 16px 0px; 
  display: block;
  text-align: center;
  width: 100%;
  border: none;
  outline: none;
  &:focus {
    background: #E2E7F8;
  }
 }


</style>

