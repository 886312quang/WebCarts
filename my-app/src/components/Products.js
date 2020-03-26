import React, { Component } from "react";

import { Row, Container } from "reactstrap";

class Products extends Component {

    render() {
        return (
            <Container>
                <section className="section">
                    <h1 className="section-heading text-center">All product</h1>     
                    <Row>      
                        {this.props.children}
                    </Row>
                </section>
            </Container>
        );
    }
}


export default Products;