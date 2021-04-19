const initialState = {
    isLoading : true
}

export default Loading =  (state=initialState, action) => {

    switch(action.type){

        case 'LOADING':
            return {...state, isLoading : true}
        
        case 'LOADED':
            return {...state, isLoading : false}

        default:
            return {...state}
    }
}