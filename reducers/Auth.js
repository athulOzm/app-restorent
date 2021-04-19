

const initialState = {
    isLogedin : false,
    errors : '',
    user : {'asdf':'asf'}
}

export default Auth = (state = initialState, action) => {

    switch(action.type){

        case 'USER_LOGIN':
            return {...initialState, isLogedin : true, user : action.payload}

        case 'USER_LOGOUT':
            return {...initialState}
            
        case 'USER_AUTH_ERR':
            return {...initialState, errors : action.payload}

        default:
            return {...state}
    }
}