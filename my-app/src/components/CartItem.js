import React, { Component } from "react";

import './Cart.css'

class CartItem extends Component {

    render() {
        var {item} =this.props;
        return (
                <tr>
                <th scope="row"><img src={item.product.img} className="img-cart"/></th>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td><i class="far fa-minus"></i> {item.quantity} <i class="far fa-plus"></i></td>
                <td>{this.showTotal(item.product.price,item.quantity)}</td>
                </tr>
        );
    }
    showTotal = (price,quantity) => {
        return price*quantity
    }
}


export default CartItem;