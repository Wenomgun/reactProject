import classes from './Content.module.css'
import Dialogs from "../Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Setting from "../Setting/Setting";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import React, {FC} from "react";
import {lazyComponent} from "../hoc/lazyComponent";
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));

type ContentType = {
    state: any;
    dispatch: any;
}

const LazyProfileContainer = lazyComponent(ProfileContainer)
const LazyUsersContainer = lazyComponent(UsersContainer)
const LazyDialogs = lazyComponent(Dialogs)

const Content: FC<ContentType> = ({state, dispatch}): JSX.Element =>{
    return (
        <div className={classes.content}>
            <Switch>
                <Route path="/profile/:userId?">
                    <LazyProfileContainer/>
                </Route>
                <Route path="/people">
                    <LazyUsersContainer/>
                </Route>
                <Route path="/message">
                    <LazyDialogs data={state} dispatch={dispatch} />
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
                <Route path="/music">
                    <Music/>
                </Route>
                <Route path="/setting">
                    <Setting/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default Content;