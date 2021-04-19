const initialState = {
    items : [],
    errors : ''
}

export default Cart = (state=initialState, action) => {

    switch(action.type){

        case 'CART_ADD':
            return {...state, items:[...state.items, action.payload]}

        case 'CART_REM':
            return {...state, items:state.items.filter((item) => {
                return item != action.payload
            })}
 

        default:
            return {...state}
    }
}