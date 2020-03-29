import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './Product.css'
import { NavLink ,Route } from "react-router-dom";
import * as Messages from './../contants/Messages';
import View from './View';
class Product extends Component {
    render() {
        var { product, match } = this.props;
        return (
            <Col sm="4">
                <Card className="text-center shadow p-3 mb-5 bg-white rounded Card">
                    <CardImg top width="100%" src={product.img} alt="Card image cap" className="ImgProduct" />
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>
                            <ul className="rating">
                                <li>
                                    {this.showRating(product.rating)}
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle>{product.price}$</CardSubtitle>
                       
                        <CardText className="inventory">Warehouse:{product.inventory}</CardText>
                        <div className="cart">
                            <a onClick={() => this.onAddtocart(product)} >
                                <Button>Addtocart</Button>
                                <NavLink to="/cart"> <i className="fad fa-cart-plus Card-cart"></i></NavLink>   
                            </a>
                        </div>
                        <NavLink to={`${match.url}/${product.name}`}>
                            <h2>Show</h2>              
                        </NavLink>
                    </CardBody>             
                </Card> 
            </Col>
        )     
    }
        
        showRating(rating){
        var result =[];

        for(var i=1;i<= rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for(var j=1;j<= (5-rating); j++){
            result.push(<i key={i+j} className="far fa-star"></i>)
        }
        return result;
    }
    onAddtocart = (product) => {
        this.props.onAddtocart(product);
        this.props.onChangeMessages(Messages.ADD_TO_CART_SUCCESS);
    }
}
export default Product;