import React, { Component } from "react";
import './Cart.css';
import * as Messages from '../../contants/Messages';

class CartItem extends Component {
  
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <tr>
                <th scope="row"><img src={item.product.img} alt={item.product.name} className="img-cart" /></th>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>
                    <i
                        className="far fa-minus"
                        onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>
                    </i>
                    {quantity}
                    <i
                        className="far fa-plus"
                        onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                    ></i>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}</td>
                <td><i className="fad fa-trash"
                    onClick={() => this.onDelete(item.product)}
                ></i></td>
            </tr>
        );
    }
    onDelete(product) {
        console.log(product);
        var { onRemoveProductInCart, onChangeMessages } = this.props;
        onRemoveProductInCart(product);
        onChangeMessages(Messages.REMOVE_ITEM_IN_CART_SUCCESS);
    }
    onUpdateQuantity(product,quantity){
        if(quantity>0){
            this.props.onUpdateItemInCart(product, quantity);
        }
    }
    showTotal = (price, quantity) => {
        return price * quantity
    }
}


export default CartItem;