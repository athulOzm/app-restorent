const initialState = {
    items : [],
    errors : '',
    menutype : 2,
    time : new Date(),
    msg:null
}

export default Cart = (state=initialState, action) => {

    switch(action.type){

        case 'CART_ADD':
            return {...state, items:[...state.items, action.payload]}

        case 'DATE_ADD':
            return {...state, time:action.payload}

        case 'ORDER_PLACE':
            return {...state, items:[], msg:"Order Placed Successfully!"}

        case 'CART_ADD2':

             var ite  = state.items.filter((item) => {
                return item.id != action.payload.id
            })

            return {...state, items:[...ite, action.payload]}

        case 'CART_TYPE':
            return {...state, menutype:action.payload}

        case 'CART_REM':

            return {...state, items:state.items.filter((item) => {
                return item.id != action.payload
            })}
 

        default:
            return {...state}
    }
}