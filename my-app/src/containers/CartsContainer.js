import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Carts from './../components/Carts';
import CartItem from './../components/CartItem';

import * as Message from './../contants/Messages';

class CartsContainer extends Component {

    render() {
        var {cart} =this.props;
        console.log(cart);
        return (
            <Carts>
                 { this.showCartItem(cart) }
            </Carts>
        );
    }
    showCartItem = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        if(cart.length > 0){
            result =cart.map((item,index)=>{
                return(
                    <CartItem 
                    key={index}
                    item={item}
                    index={index}
                    />
                )
            });
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
        cart : state.carts
    }
}
export default connect(mapStateToProps, null)(CartsContainer);