<template>
  <div>
    <header class="topbar">
      <div class="back" @click="goBack()">
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23289 0.190785C4.49385 -0.0663038 4.91381 -0.0631698 5.1709 0.197785C5.42799 0.458739 5.42485 0.878696 5.1639 1.13578L2.2819 3.97979H23.3369C23.7033 3.97979 24.0004 4.27684 24.0004 4.64328C24.0004 5.00973 23.7033 5.30679 23.3369 5.30679H2.2799L5.1619 8.15078C5.3307 8.31709 5.39797 8.56082 5.33834 8.79017C5.27872 9.01951 5.10127 9.19963 4.87284 9.26267C4.64441 9.32571 4.3997 9.26209 4.2309 9.09578L0.197895 5.11578C0.0712872 4.99116 -7.62939e-06 4.82094 -7.62939e-06 4.64328C-7.62939e-06 4.46563 0.0712872 4.29541 0.197895 4.17078L4.23289 0.190785Z" fill="white"/>
        </svg>
      </div>
      <div class="title-bar">
        <h1>Profile</h1>
      </div>
    </header>
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
    goBack() {
      return this.$router.back()
    },
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

.topbar {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0 16px;
  transform: translateY(0);
  z-index: 999;
  flex-wrap: wrap;
  .back {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 16px;
  }
  h1 {
    color:white;
    font-family: var(--title);
    font-size: 18px;
    width: 100%;
    text-align: center;
    padding-bottom: 2px;
  }
  span {
    font-size: 12px;
    color:var(--textGray);
  }
}
.title-bar {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
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
