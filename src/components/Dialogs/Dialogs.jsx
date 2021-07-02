import classes from './Dialogs.module.css'
import List from "./List/List";
import Messages from "./Messages/Messages";

const Dialogs = (props) =>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.listWrapper}>
                <List dialogsData={props.dialogsData}></List>
            </div>
            <div className={classes.messagesWrapper}>
                <Messages messagesData={props.messagesData}></Messages>
            </div>
        </div>
    );
}

export default Dialogs;