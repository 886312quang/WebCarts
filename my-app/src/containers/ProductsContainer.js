import React, { Component } from "react";
import Products from './../components/Products';
import Product from './../components/Product.js';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMesssages } from './../actions/index';




class ProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        
        var result = null;
        var { onAddtocart, onChangeMessages, match } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    match={match}
                    key={index}
                    product={product}
                    onAddtocart={onAddtocart}
                    onChangeMessages={onChangeMessages}
                />
            });
        }
        return result;
    }

}
ProductsContainer.propType = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })

    ).isRequired,
    onChangeMessages: PropTypes.func.isRequired,
    onAddtocart:PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddtocart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessages: (messages) => {
            dispatch(actChangeMesssages(messages));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);