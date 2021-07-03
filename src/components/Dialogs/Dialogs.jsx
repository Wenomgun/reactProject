import classes from './Dialogs.module.css'
import List from "./List/List";
import Messages from "./Messages/Messages";

const Dialogs = (props) =>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.listWrapper}>
                <List dialogsData={props.data.dialogsData}></List>
            </div>
            <div className={classes.messagesWrapper}>
                <Messages messagesData={props.data.messagesData}
                          dispatch={props.dispatch} ></Messages>
            </div>
        </div>
    );
}

export default Dialogs;