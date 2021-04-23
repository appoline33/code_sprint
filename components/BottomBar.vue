<template>
  <section class="bottom_bar">
    <li class="item" :class="{ 'active': this.$route.path === '/' }">
      <nuxt-link to="/">
           <span class="item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 19V12.8768C21.5 11.4536 21.5 10.742 21.3179 10.0857C21.1565 9.5044 20.8913 8.95707 20.535 8.4702C20.1328 7.92061 19.5742 7.47966 18.4572 6.59778L18.4572 6.59776L16.9572 5.41354C15.1862 4.01542 14.3007 3.31635 13.3207 3.04796C12.4562 2.81118 11.5438 2.81118 10.6793 3.04796C9.69929 3.31635 8.81381 4.01542 7.04285 5.41354L5.54285 6.59775C4.42577 7.47965 3.86724 7.9206 3.46504 8.4702C3.10875 8.95707 2.84351 9.5044 2.68215 10.0857C2.5 10.742 2.5 11.4536 2.5 12.8768V19C2.5 19.9319 2.5 20.3978 2.65224 20.7654C2.85523 21.2554 3.24458 21.6448 3.73463 21.8478C4.10218 22 4.56812 22 5.5 22H6.375C6.49106 22 6.5491 22 6.59814 21.9976C7.62554 21.9471 8.44712 21.1255 8.49759 20.0981C8.5 20.0491 8.5 19.9911 8.5 19.875V17C8.5 15.067 10.067 13.5 12 13.5C13.933 13.5 15.5 15.067 15.5 17V19.875C15.5 19.9911 15.5 20.0491 15.5024 20.0981C15.5529 21.1255 16.3745 21.9471 17.4019 21.9976C17.4509 22 17.5089 22 17.625 22H18.5C19.4319 22 19.8978 22 20.2654 21.8478C20.7554 21.6448 21.1448 21.2554 21.3478 20.7654C21.5 20.3978 21.5 19.9319 21.5 19Z" class="icon-fill"/>
          </svg>
          </span>
        <span class="item-label">Accueil</span>
      </nuxt-link>
    </li>
    <li class="item" :class="{ 'active': this.$route.path === '/search' }">
      <nuxt-link to="/search">
          <span class="item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L8.90381 15.0962M8.90381 15.0962C7.72754 13.9199 7 12.2949 7 10.5C7 6.91015 9.91015 4 13.5 4C17.0899 4 20 6.91015 20 10.5C20 14.0899 17.0899 17 13.5 17C11.7051 17 10.0801 16.2725 8.90381 15.0962Z" class="icon-stroke" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        <span class="item-label">Recherche</span>
      </nuxt-link>
    </li>
    <li class="item" :class="{ 'active': this.$route.path === '/profile/commande' }">
      <nuxt-link to="/profile/commande">
          <span class="item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 6.99998C8.9 5.28789 10.2879 3.89998 12 3.89998C13.7121 3.89998 15.1 5.28789 15.1 6.99998V10.1H8.9V6.99998ZM16.9 6.99998V10.1H19C19.429 10.1 19.7984 10.4028 19.8825 10.8235L21.8825 20.8235C21.9354 21.0879 21.867 21.362 21.696 21.5706C21.5251 21.7791 21.2696 21.9 21 21.9H3C2.73036 21.9 2.47494 21.7791 2.30399 21.5706C2.13305 21.362 2.0646 21.0879 2.11748 20.8235L4.11748 10.8235C4.20161 10.4028 4.57099 10.1 5 10.1H7.1V6.99998C7.1 4.29378 9.2938 2.09998 12 2.09998C14.7062 2.09998 16.9 4.29378 16.9 6.99998Z" class="icon-fill"/>
            </svg>
          </span>
        <span class="item-label">Commandes</span>
      </nuxt-link>
    </li>
    <li class="item" :class="{ 'active': this.$route.path === '/profile' }">
      <nuxt-link to="/profile" >
           <span class="item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="6.5" rx="4" ry="4.5" class="icon-stroke" stroke-width="1.8"/>
              <path d="M20 19C20 22.5 16 21.5 12 21.5C8 21.5 4 22.5 4 19C4 17 7.58172 14.5 12 14.5C16.4183 14.5 20 17 20 19Z" class="icon-stroke" stroke-width="1.8"/>
            </svg>
          </span>
        <span class="item-label">Compte</span>
      </nuxt-link>
    </li>
  </section>
</template>

<script>
export default  {
  //
}
</script>
<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.bottom_bar {
  height: 70px;
  background: #151620;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  li {
    list-style-type: none;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    a {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      text-decoration: none;
      .item-icon, .item-label {
        display: block;
        width: 100%;
        text-align: center;
      }
      .item-icon {
        margin-bottom: 8px;
        height: 24px;
        svg {
          height: 24px;
          width: 24px;
          .icon-fill {
            fill:#888896;
          }
          .icon-stroke {
            stroke:#888896;
          }
        }
      }
      .item-label {
        font-size: 11px;
        color:#888896;
      }
    }
    &.active {
      a {
        .item-label {
          color:white;
        }
        svg {
          .icon-fill {
            fill:white;
          }
          .icon-stroke {
            stroke:white;
          }
        }
      }
    }
  }
}
</style>
