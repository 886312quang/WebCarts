import React, { Component } from "react";
import {Table, Container } from "reactstrap";

class Carts extends Component {
    render() {
        return (
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
            </Container>
        );
    }
}

export default Carts;