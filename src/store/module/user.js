
import {getUserCookies,setUserCookies,removeCookies} from '@/utils/userCookies'
const state = {
    users:getUserCookies()
}

const mutations={
    setUserInfo(state,userInfo){
        state.users = userInfo
    },
    removeUsersInfo(state){
        state.users = {
            username:"",
            appkey:"",
            email:"",
            role:""
        }
    }
}
const getters = {
    getUserInfo(state){
        return state.users
    }
}
const actions = {
    setUserInfo({commit},userInfo){
        setUserCookies(userInfo)
        commit('setUserInfo',userInfo)
    },
    loginOut({commit}){
        commit('removeUsersInfo');
        removeCookies();
        
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}