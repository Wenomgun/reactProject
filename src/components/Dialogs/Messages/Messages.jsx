import classes from './Messages.module.css'
import Message from "./Message/Message";
import React from 'react';
import {addMsgActionCreator} from "../../../Redux/State";

const Messages = (props) =>{
    const data = props.messagesData;
    let messageInput = React.createRef();

    let _sendMessage = (e) => {
        let newMsg = {
            text: messageInput.current.value,
            userId: '1',
            date: new Date(),
            fromMe: true
        };

        props.dispatch(addMsgActionCreator(newMsg));
        messageInput.current.value = '';
    }

    return (
        <div className={classes.messagesWrapper}>
            {data.map((item, i) =>
                <Message key={i} data={item}></Message>
            )}
            <div className={classes.messageArea}>
                <div>
                    <textarea ref={messageInput}/>
                </div>
                <div>
                    <button onClick={_sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;