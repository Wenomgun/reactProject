import classes from './Message.module.css'

const Message = (props) =>{
    const data = props.data;
    const fromMsg = data.fromMe ? classes.alignSelfRight : classes.alignSelfLeft;
    const textMsg = data.fromMe ? classes.textAlignRight : classes.textAlignLeft;
    return (
        <div className={[fromMsg, classes.message, textMsg].join(' ')}>
            {data.text}
        </div>
    );
}

export default Message;