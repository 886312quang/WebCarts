import React, { Component } from "react";
import { connect } from "react-redux";
import Message from './../components/Message';
import PropTypes from 'prop-types';


class MessagesContainer extends Component {

    render() {
        var { messages } = this.props;
        return (
            <Message messages={messages} />
        )
    }
}
const mapStateToProps = state => {
    return {
        messages : state.messages
    }
}

MessagesContainer.propTypes = {
    messages: PropTypes.string.isRequired
}

export default connect(mapStateToProps,null)(MessagesContainer);