import React, { Component } from "react";
import {Table, Container } from "reactstrap";
import MessagesContainer from "../../containers/MessagesContainer";
import TopMenu from './../Menu/TopMenu';
class Carts extends Component {
    render() {
        return (
            <div className="Cart">
                <TopMenu/>
           <Container>
                  <Table>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Trade Mark</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </Table>
                <MessagesContainer/>
            </Container>
            </div>
        );
    }
}

export default Carts;