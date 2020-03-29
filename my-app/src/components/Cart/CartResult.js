import React, { Component } from "react";

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td><h4><strong>Totals</strong></h4></td>
                <td>
                    <h4>
                        <strong>{this.showTotals(cart)}$                         
                        </strong>
                    </h4>
                </td>
                <td><h4><strong><i className="fad fa-money-check-alt">
                    </i></strong></h4></td>
                </tr>
        );
    }
    showTotals = (cart) => {
        var totals = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                totals += (cart[i].product.price * cart[i].quantity);
            }
        }
        return totals;
    }
}

export default CartResult;