
const state = {
    menuRoutes:[]
}

const getters = {
    getMenuRouters(state){
        return state.menuRoutes
    }
}

const mutations = {
    setMenuRoutes(state,routes){
        state.menuRoutes = routes
    }
}

const actions = {
    setMenuRoutes({commit},routes){
        commit('setMenuRoutes',routes)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}