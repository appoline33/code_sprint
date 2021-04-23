export const state = () => ({
  showMenu: true,
  topbarSticky: false,
  establishmentName: '',
  establishmentThumbnail: '',
  userID: "1eba424e-45e5-68ae-803c-acde48001122",
  orderNumbers: ''
})
export const mutations = {
  changeMenuState(state) {
    state.showMenu = false
  },
  changeTopbar(state, payload) {
    state.topbarSticky = payload
  },
  changeEstablishmentName(state, payload) {
    state.establishmentName = payload
  },
  changeEstablishmentThumbnail(state, payload) {
    state.establishmentThumbnail = payload
  },
  changeOrderNumber(state, payload) {
    state.orderNumbers = payload
  }
}
