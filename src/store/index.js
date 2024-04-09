import Vue from 'vue'
import Vuex from 'vuex'
import buttons from './module/button'
import user from './module/user'
import menu from './module/menu'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    buttons,
    user,
    menu
  }
})
// export default new Vuex.Store({
//   state: {
//     collapsed:false
//   },
//   getters: {
//   },
//   mutations: {
//     changeCollapsed(state){
//       state.collapsed = !state.collapsed
//     }
//   },
//   actions: {
//     asyncChangeCollapsed({commit}){
//       commit('changeCollapsed')
//     }
//   },
//   modules: {
//   }
// })
