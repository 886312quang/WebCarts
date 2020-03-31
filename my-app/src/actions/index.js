import * as Types from './../contants/ActionType';
import callApi from './../utils/apiCaller';
export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}
export const actFetchProductRequest = () =>{
    return (dispatch) =>{
        return callApi('products','GET',null).then(res =>{
            dispatch(actFetchProduct(res.data))
        })
    }
}
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id)
            )
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

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
export const actRemoveItemInCart = (product) => {
    return {
        type: Types.REMOVE_ITEM_IN_CART,
        product
    }
}

export const actUpdateItemInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_ITEM_IN_CART,
        product,
        quantity
    }
}