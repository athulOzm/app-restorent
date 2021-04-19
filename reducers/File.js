const initialState = {
    file : '',
    errors : ''
}

export default File = (state=initialState, action) => {

    switch(action.type){

        case 'ADD_FILE':
            return {...state, file:action.payload}

        case 'ADD_FILE_ERR':
            return {...state, errors:action.payload}

        default:
            return {...state}
    }
}