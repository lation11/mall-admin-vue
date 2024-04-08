import Vue from 'vue'
import Vuex from 'vuex'
import buttons from './module/button'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    buttons
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
