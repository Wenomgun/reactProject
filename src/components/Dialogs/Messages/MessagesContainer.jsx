import React from 'react';
import {addMsgActionCreator} from "../../../Redux/Message-reducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import {authRedirectContainer} from "../../hoc/authRedirectContainer";
import {compose} from "redux";

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

export default compose(connect(mapStateToProps, mapDispatchToProps), authRedirectContainer )(Messages);