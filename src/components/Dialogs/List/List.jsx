import classes from './List.module.css'
import {BrowserRouter as Router} from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const List = (props) =>{
    const data = props.dialogsData

    return (
        <Router>
            <div className={classes.list}>
                {data.map((item, i) =>
                    <Dialog key={i} name={item.name} userId={item.userId}></Dialog>
                )}
            </div>
        </Router>
    );
}

export default List;