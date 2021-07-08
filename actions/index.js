import Axios from "axios";
import {storeToken, removeToken, getToken, apiserv} from '../_shared'


//revisit of app
export const getUserFetch = () => {

    return (dispatch) => {

        dispatch(loading())

        getToken('jwtoken').then(res => {

            const headers = {
                'content-type'  :   'Application/json',
                'Authorization' :   `Bearer ${res}`
            }

            return Axios.get(`${apiserv}/user`, {headers})
            .then( res => {

                if(res.errors){
    
                    removeToken('jwtoken');
                    dispatch(loaded());
                }
                else if(res.data){
                    //console.log(res.data);
    
                    dispatch(userLogin(res.data));
                    dispatch(fetchInit());
                    dispatch(loaded());
                }
            })
            .catch(err => {
    
                removeToken('jwtoken');
                dispatch(loaded());
            });
        })
    }
}



//user login
export const createAuth = (user) => {

    return (dispatch) => {

        dispatch(loading());

        return Axios.post(`${apiserv}/userlogin`, {
            'memberid' : user.userName,
            'password' : user.password
        })
        .then(res => {

            storeToken('jwtoken', res.data.data.token);
            dispatch(fetchInit());
            dispatch(userLogin(res.data.data.user));
            dispatch(loaded());
        })
        .catch(err => {
            dispatch({type: `USER_AUTH_ERR`, payload: 'Invalid Member ID, Please try again.'});
            dispatch(loaded());
        });
    }
}

//error handle

// const hasError = (act, msg) => {

//     return {
//         type : act,
//         payload : msg
//     }
// }


export const fileUpload = data => {

    return (dispatch) => {

        Axios.post(`${apiserv}/upload`, {
            file:data,
            authe:'athul'
        })
        .then(res => {
            dispatch({
                type:'ADD_FILE',
                payload:res.data.image2
            })
            
        })
        //.catch(err => console.log(err))
    }
}


//logout
export const userLogout = () => {

    return (dispatch) => {
        removeToken('jwtoken');
        dispatch({type:`USER_LOGOUT`});
    }
}

//loading
const loading = () => {

    return {type: `LOADING`}
}

//loaded
const loaded = () => {
    
    return {type:'LOADED'}
}

//userlogin
const userLogin = (user) => {

    return {type:'USER_LOGIN', payload:user}
}

//fetch Init
const fetchInit = () => {
    return (dispatch) => {
        getToken('jwtoken').then(res => {

            const headers = {
                'content-type'  :   'Application/json',
                'Authorization' :   `Bearer ${res}`
            }
            return Axios.get(`${apiserv}/init`, {headers})
            .then( res => {

                //console.log(res.data.data.categories);

                dispatch({type:`CATEGORY_SYNC`, payload:res.data.data.categories})
                dispatch({type:`PRODUCT_SYNC`, payload:res.data.data.menus})
                
            });
        })
    }
}

//register

export const actRegister = (user) => {

    

    return (dispatch) => {

        dispatch(loading())

        return Axios.post(`${apiserv}/registeruser`, {
             name : user.user_name,
             email:user.email,
             memberid : user.memberid,
             phone:user.phone
        })
            .then(res => {

                //console.log(res);

                if(res.data.status){

                    // dispatch(createAuth({
                    //     memberid : user.memberid,
                    //     //password : user.password
                    // }))

                    storeToken('jwtoken', res.data.data.token);
                    dispatch(userLogin(res.data.data.user));
                    dispatch(fetchInit());
                    dispatch(loaded());
                } 
            })
            .catch(err => {
                //console.log(err);
                dispatch(loaded());
                
            })
    }
}

 