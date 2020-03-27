import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Carts from './../components/Carts';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {actRemoveItemInCart, actChangeMesssages} from './../actions/index';

import * as Message from './../contants/Messages';

class CartsContainer extends Component {

    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <Carts>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Carts>
        );
    }
    showCartItem = (cart) => {
    var result = <tr><td>{ Message.MSG_CART_EMPTY }</td></tr>;
    var {onRemoveProductInCart,onChangeMessages} = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onRemoveProductInCart={onRemoveProductInCart}
                        onChangeMessages={onChangeMessages}

                    />
                )
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}
CartsContainer.propType = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        Product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired

}
const mapStateToProps = state => {
    return {
        cart: state.carts
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
            onRemoveProductInCart : (product) => {
            dispatch(actRemoveItemInCart(product))
        },
        onChangeMessages: (messages) => {
            dispatch(actChangeMesssages(messages))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);