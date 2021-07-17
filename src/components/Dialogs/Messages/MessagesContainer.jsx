import React from 'react';
import {addMsgActionCreator} from "../../../Redux/Message-reducer";
import {connect} from "react-redux";
import {authRedirectContainer} from "../../hoc/authRedirectContainer";
import {compose} from "redux";
import classes from './Messages.module.css'
import {Field, reduxForm} from "redux-form";
import Message from "./Message/Message";
import {requiredField} from '../../../utils/validators/validators'
import {TextField} from "../../Common/TextField";

const messageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.messageArea}>
                <div>
                    <Field name={'messageText'}
                           component={TextField}
                           placeholder={'Введите сообщение'}
                           validate={[requiredField]}
                    />
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'messageForm'
})(messageForm)

class Messages extends React.Component {
    submit = (formData) => {
        let newMsg = {
            text: formData.messageText,
            userId: '1',
            date: new Date(),
            fromMe: true
        };

        this.props.sendMessage(newMsg);
    }

    render() {
        return (
            <div className={classes.messagesWrapper}>
                {this.props.messagesData.map((item, i) =>
                    <Message key={i} data={item}></Message>
                )}
                <MessageReduxForm onSubmit={this.submit}></MessageReduxForm>
            </div>
        );
    }
}

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

export default compose(connect(mapStateToProps, mapDispatchToProps), authRedirectContainer)(Messages);