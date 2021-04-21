<template>
  <div class="badge-wrapper">
    <span class="badge">{{rating}}</span>
  </div>
</template>

<script>
export default {
  props: ['rating'],
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.badge-wrapper {
  margin-bottom: 14px;

  .badge {
    padding: 4px 8px;
    background:var(--reviews-good);
    color:white;
    border-radius: 4px;
    font-size: 12px;
    &.is-good {
      background:var(--reviews-good);
    }
    &.is-medium {
      background:var(--reviews-medium);
    }
    &.is-bad {
      background:var(--reviews-bad);
    }
  }
}
</style>
