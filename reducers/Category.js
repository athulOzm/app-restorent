const initialState = {
    items : [],
    errors : ''
}

export default Category = (state=initialState, action) => {

    switch(action.type){

        case 'CATEGORY_SYNC':
            return {items:action.payload}
 

        default:
            return {...state}
    }
}