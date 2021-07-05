import classes from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import ListContainer from "./List/ListContainer";

const Dialogs = (props) =>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.listWrapper}>
                <ListContainer></ListContainer>
            </div>
            <div className={classes.messagesWrapper}>
                <MessagesContainer ></MessagesContainer>
            </div>
        </div>
    );
}

export default Dialogs;