import React from 'react';
import {addMsgActionCreator} from "../../../Redux/Message-reducer";
import {connect} from "react-redux";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMsg) => {
            dispatch(addMsgActionCreator(newMsg));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;