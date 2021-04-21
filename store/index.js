export const state = () => ({
  showMenu: true,
  topbarSticky: false,
})
export const mutations = {
  changeMenuState(state) {
    state.showMenu = false
  },
  changeTopbar(state, payload) {
    state.topbarSticky = payload
  }
}
