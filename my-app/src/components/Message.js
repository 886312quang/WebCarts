import React, { Component } from "react";
class Message extends Component {
    render() {
        var {messages} = this.props;
        return (
            <h5>
                {messages}
            </h5>
        );
    }
}
export default Message;