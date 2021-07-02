import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) =>{
    return (
        <div>
            <NavLink to={`/message/${props.userId}`}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;