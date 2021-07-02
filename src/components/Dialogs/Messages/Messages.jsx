import classes from './Messages.module.css'
import Message from "./Message/Message";
import Dialog from "../List/Dialog/Dialog";

const Messages = (props) =>{
    const data = props.messagesData;
    return (
        <div className={classes.messagesWrapper}>
            {data.map((item, i) =>
                <Message key={i} data={item}></Message>
            )}
        </div>
    );
}

export default Messages;