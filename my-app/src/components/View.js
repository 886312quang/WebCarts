import React, { Component } from "react";

class View extends Component {
    render() {
        var {match} = this.props;
        var name = match.params.name
        return (
        <h2>View product {name}</h2>
        );
    }
}

export default View;