<template>
  <div>
    <Nuxt />
    <BottomBar v-show="this.$store.state.showMenu"/>
    <div class="overlay_restrict" v-if="showRestrict">
      <h2>L'application peut être utiliser que sur mobile.</h2>
    </div>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar";
export default {
  components: {
    BottomBar
  },
  data() {
    return {
      showRestrict: false
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.isMobile);

      //Init
      this.isMobile()
    })
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.showRestrict = false
      } else {
        this.showRestrict = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools/variables';
.overlay_restrict {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: var(--title);
  color:white;
  z-index: 999;
}
</style>
