import axios from '@/utils/axios.js';

export const loginUser = (params)=>{
    return axios.post('/passport/login', params);
    // return axios({
    //     url:'/passport/login',
    //     methods:'post',
    //     data
    // })
}