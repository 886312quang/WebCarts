import React, { Component } from "react";
import { Row, Container} from "reactstrap";
import {NavLink} from 'react-router-dom';
import TopMenu from './../../components/Menu/TopMenu'
import MessagesContainer from "../../containers/MessagesContainer";
class Products extends Component {

    render() {
        return (
            <div className="Products shadow-sm p-10 mb-6 bg-white rounded ">
           
                <div className="MenuProduct">
                     <TopMenu />
                    <h2 className="text-center">Shop</h2>
                    <p className="text-center">Purchase Our Featured Products</p>
                </div>
                <Container>   
                    <section className="section">
                        <h1 className="section-heading text-center">All product</h1> 
                        <NavLink to="/shop/add"  className="btn btn-danger addItem">Add Item</NavLink>
                        <Row>      
                            {this.props.children}
                        </Row>
                    </section>
                    <MessagesContainer/>
                </Container>
               
            </div>
        );
    }
}


export default Products;