const initialState = {
    items : [],
    errors : ''
}

export default Product = (state=initialState, action) => {

    switch(action.type){

        case 'PRODUCT_SYNC':
            return {items:action.payload}
 

        default:
            return {...state}
    }
}