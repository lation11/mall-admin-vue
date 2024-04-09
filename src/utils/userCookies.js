import Cookies from "js-cookie";

/**
 *  赋值Cookies
 * @param {Object} obj 
 */
export const setUserCookies=(obj)=>{
    const userArr = Object.entries(obj);
    for(let i=0;i< userArr.length;i++){
        Cookies.set(userArr[i][0],userArr[i][1])
    }
}

export const getUserCookies=()=>{
    return{
        username:Cookies.get('username'),
        appkey:Cookies.get('appkey'),
        email:Cookies.get('email'),
        role:Cookies.get('role')
    }
}

export const removeCookies=()=>{
    Cookies.remove('username')
    Cookies.remove('appkey')
    Cookies.remove('email')
    Cookies.remove('role')
    return true
}