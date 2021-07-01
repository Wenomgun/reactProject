import Profile from "../Profile/Profile";
import classes from './Content.module.css'
import Dialogs from "../Dialogs/Dialogs";

const Content = () =>{
    return (
        <div className={classes.content}>
            <Profile></Profile>
            {/*<Dialogs></Dialogs>*/}
        </div>
    );
}

export default Content;