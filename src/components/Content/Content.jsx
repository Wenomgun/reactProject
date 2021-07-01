import Profile from "../Profile/Profile";
import classes from './Content.module.css'
import Dialogs from "../Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Setting from "../Setting/Setting";

const Content = () =>{
    return (
        <div className={classes.content}>
            <Switch>
                <Route path="/profile">
                    <Profile></Profile>
                </Route>
                <Route path="/message">
                    <Dialogs></Dialogs>
                </Route>
                <Route path="/news">
                    <News></News>
                </Route>
                <Route path="/music">
                    <Music></Music>
                </Route>
                <Route path="/setting">
                    <Setting></Setting>
                </Route>
            </Switch>
        </div>
    );
}

export default Content;