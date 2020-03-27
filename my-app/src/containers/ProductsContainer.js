import React, { Component } from "react";
import Products from './../components/Products';
import Product from './../components/Product.js';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {actAddToCart} from './../actions/index';



class ProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
    showProducts(products) {
        var result = null;
        var {onAddtocart} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                        key={index}
                        product={product}
                        onAddtocart = { onAddtocart }
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
      
    ).isRequired
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddtocart: (product) =>{
            dispatch(actAddToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);