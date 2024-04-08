const state = {
  collapsed: false,
};

const mutations = {
  changeCollapsed(state) {
    state.collapsed = !state.collapsed;
  },
};

const actions = {
  asyncChangeCollapsed({ commit }) {
    commit("changeCollapsed");
  },
};

const getters = {
    getCollapsed(state){
        return state.collapsed
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}