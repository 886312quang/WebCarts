import React, { Component } from "react";
import { Container } from "reactstrap";
class View extends Component {
   
    render() {
        var { match } = this.props;
        var name = match.params.name
        return (
            <Container className='text-center View'>
                <h2>{name}</h2>
            </Container>
        );
    }
}

export default View;