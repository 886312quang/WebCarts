import * as Types from './../contants/ActionType';


export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity,
    }
}
export const actChangeMesssages = (messages) => {
    return {
        type: Types.CHANGE_MESSAGES,
        messages
    }
}
export const actRemoveItemInCart = (product) =>{
    return {
        type: Types.REMOVE_ITEM_IN_CART,
        product
    }
}