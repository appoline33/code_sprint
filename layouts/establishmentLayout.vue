<template>
  <div>
    <transition name="fade">
      <header class="topbar" v-if="!$store.state.topbarSticky">
        <div class="back">
          <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23289 0.190785C4.49385 -0.0663038 4.91381 -0.0631698 5.1709 0.197785C5.42799 0.458739 5.42485 0.878696 5.1639 1.13578L2.2819 3.97979H23.3369C23.7033 3.97979 24.0004 4.27684 24.0004 4.64328C24.0004 5.00973 23.7033 5.30679 23.3369 5.30679H2.2799L5.1619 8.15078C5.3307 8.31709 5.39797 8.56082 5.33834 8.79017C5.27872 9.01951 5.10127 9.19963 4.87284 9.26267C4.64441 9.32571 4.3997 9.26209 4.2309 9.09578L0.197895 5.11578C0.0712872 4.99116 -7.62939e-06 4.82094 -7.62939e-06 4.64328C-7.62939e-06 4.46563 0.0712872 4.29541 0.197895 4.17078L4.23289 0.190785Z" fill="white"/>
          </svg>
        </div>
        <div class="logo">
          <svg width="62" height="21" viewBox="0 0 62 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.43894 12.964C0.738218 13.6388 1.13725 14.2541 1.656 14.7701C2.1947 15.2861 2.79326 15.7029 3.47162 15.9807C4.16993 16.2784 4.9281 16.4174 5.68627 16.4174C6.44444 16.4174 7.20261 16.2784 7.90093 15.9807C8.57929 15.7029 9.17784 15.2861 9.71654 14.7701C10.2353 14.2541 10.6343 13.6388 10.9336 12.964C11.2329 12.2694 11.3725 11.535 11.3725 10.761V1.1352L8.37977 0.142857V5.7794C8.22015 5.70001 8.06054 5.62062 7.90093 5.56108C7.20261 5.26337 6.46439 5.12445 5.68627 5.12445C4.9281 5.12445 4.16993 5.26337 3.47162 5.56108C2.79326 5.83894 2.1947 6.25572 1.656 6.77174C1.13725 7.28777 0.738218 7.90302 0.43894 8.57782C0.159615 9.27246 0 10.0068 0 10.761C0 11.535 0.159615 12.2694 0.43894 12.964ZM5.68627 8.08164C7.16271 8.08164 8.37977 9.29231 8.37977 10.761C8.37977 12.2495 7.16271 13.4403 5.68627 13.4403C4.20984 13.4403 2.99277 12.2495 2.99277 10.761C2.99277 9.29231 4.20984 8.08164 5.68627 8.08164Z" fill="white"/>
            <path d="M15.7315 16.4174V11.5178C15.7315 9.60579 17.2845 8.03235 19.2157 8.03235V5.04482C18.3397 5.04482 17.4836 5.22407 16.6872 5.56265C15.9306 5.88133 15.2338 6.35933 14.6365 6.95684C14.0392 7.53443 13.5813 8.23152 13.2428 9.00828C12.9044 9.80495 12.7451 10.6415 12.7451 11.5178V16.4174H15.7315Z" fill="white"/>
            <path d="M20 16.2213H22.9412V4.84874L20 5.83423V16.2213Z" fill="white"/>
            <path d="M33.2376 7.00769C32.2853 6.07467 31.0353 5.55852 29.7059 5.55852C28.9916 5.55852 28.317 5.69749 27.7019 5.97541V5.2409H24.7257V10.1045C24.7059 10.2634 24.7059 10.4023 24.7059 10.5611H24.7257V16.4174H27.7019V10.2634C27.8408 9.29063 28.6741 8.53627 29.7059 8.53627C30.817 8.53627 31.7297 9.44945 31.7297 10.5611V16.4174H34.7059V10.5611C34.7059 9.21123 34.1702 7.96057 33.2376 7.00769Z" fill="white"/>
            <path d="M42.905 16.418H46.4278L42.3478 10.0944L46.6667 5.30673H42.8453L39.0837 9.5358V0.339571H36.0784V16.418H39.0837V13.5853L40.2779 12.2887L42.905 16.418Z" fill="white"/>
            <path d="M46.4706 16.418H49.4118V0.339571L46.4706 1.33699V16.418Z" fill="white"/>
            <path d="M52.0205 20.1429H55.1647L61.1765 5.2409H58.0124L55.5207 11.478L52.8708 5.2409H49.6078L54.0178 15.1887L52.0205 20.1429Z" fill="white"/>
          </svg>
        </div>
    </header>
    </transition>
    <transition name="fade">
      <header class="topbar" v-if="$store.state.topbarSticky" style="background:url('https://images.unsplash.com/photo-1618844481346-f53026596f06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80') center center">
        <div class="mask">
          <div class="back">
            <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23289 0.190785C4.49385 -0.0663038 4.91381 -0.0631698 5.1709 0.197785C5.42799 0.458739 5.42485 0.878696 5.1639 1.13578L2.2819 3.97979H23.3369C23.7033 3.97979 24.0004 4.27684 24.0004 4.64328C24.0004 5.00973 23.7033 5.30679 23.3369 5.30679H2.2799L5.1619 8.15078C5.3307 8.31709 5.39797 8.56082 5.33834 8.79017C5.27872 9.01951 5.10127 9.19963 4.87284 9.26267C4.64441 9.32571 4.3997 9.26209 4.2309 9.09578L0.197895 5.11578C0.0712872 4.99116 -7.62939e-06 4.82094 -7.62939e-06 4.64328C-7.62939e-06 4.46563 0.0712872 4.29541 0.197895 4.17078L4.23289 0.190785Z" fill="white"/>
            </svg>
          </div>
          <h1>Grizzly Pub</h1>
        </div>
      </header>
    </transition>
    <Nuxt />
    <div class="overlay_restrict" v-if="showRestrict">
      <h2>L'application peut être utiliser que sur mobile.</h2>
    </div>
  </div>
</template>

<script>
export default {
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

.topbar {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(14,14,14);
  background: linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(23,25,35,0) 100%);
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0 16px;
  transform: translateY(0);
  .back {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 16px;
  }
  .mask {
    background: rgb(14,14,14);
    background: linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(23,25,35,0) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color:white;
    font-family: var(--title);
    font-size: 18px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  transform: translateY(0px);
}
.fade-enter, .fade-leave-to {
  transform: translateY(-90px);
}
</style>
