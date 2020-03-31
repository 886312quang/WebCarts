import React, { Component } from "react";
import Products from './../components/Products/Products';
import Product from './../components/Products/Product';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMesssages } from './../actions/index';
import callApi from './../utils/apiCaller';



class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    onDelete = (id) =>{
        var {products} =this.state;
        callApi(`products/${id}`,'DELETE', null).then(res =>{
            if(res.status === 200){ // OK
                var index = this.findIndex(products, id)
                if( index !== -1)
                {
                    products.splice(index,1);
                    this.setState({
                        products:products
                    })
                }      
            }
        })
    }
    findIndex =(products,id)=>{
        var result =-1;
        for (var i = 0; i < products.length; i++) {
            if (products[i]._id === id) {
                result = i;
            }
        }
        return result;
    }
    render() {
        var { products } = this.state;
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
                    onDelete={this.onDelete}

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
    onAddtocart: PropTypes.func.isRequired
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
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);