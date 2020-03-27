import React, { Component } from "react";
import './Cart.css';
import * as Messages from './../contants/Messages';

class CartItem extends Component {

    render() {
        var {item} =this.props;
        return (
                <tr>
                <th scope="row"><img src={item.product.img} alt={item.product.name} className="img-cart"/></th>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td><i className="far fa-minus"></i> {item.quantity} <i className="far fa-plus"></i></td>
                <td>{this.showTotal(item.product.price,item.quantity)}</td>
                <td><i className="fad fa-trash" 
                 onClick={()=> this.onDelete(item.product)}
                ></i></td>
                </tr>
        );
    }
    onDelete(product) {
        console.log(product);
      var {onRemoveProductInCart,onChangeMessages} = this.props;
      onRemoveProductInCart(product);
      onChangeMessages(Messages.REMOVE_ITEM_IN_CART_SUCCESS);
    }
    showTotal = (price,quantity) => {
        return price*quantity
    }
}


export default CartItem;