import React from 'react';
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import db from "../../Redux/db";
import firebase from "firebase";

class HeaderContainer extends React.Component {
    componentDidMount() {
        db.post('/auth/login', {
                email: 'free@samuraijs.com',
                password: 'free'
            }).then((resp) => {
                debugger;
                this.props.setUserData({
                    ...resp.data
                });
            });
    }

    changeAuth = () => {


        firebase.auth().signInWithEmailAndPassword('akalyig@mail.ru', '123456').then((resp) => {
            this.props.setUserData({
                email: resp.user.email,
                uid: resp.user.uid
            });
        });
    }

    logout = () => {
        firebase.auth().signOut().then((resp) => {
            this.props.setUserData(null);
        });
    }

    renderHeaderAuth = () => {
        if (this.props.userData.email) {
            return <div onClick={() => this.logout()}>
                <NavLink to='/login'>Logout</NavLink>
            </div>
        } else {
            return <div onClick={() => this.changeAuth()}>
                <NavLink to='/login'>Login</NavLink>
            </div>
        }
    }


    render() {
        return <header className={classes.header}>
            <div>
                Logo
            </div>
            {
                this.renderHeaderAuth()
            }
        </header>
    }

}

const mapStateToProps = (state) => {
    return {
        userData: state.userData.userData,
        isAuth: state.userData.isAuth,
    }
}
export default connect(mapStateToProps, {
    setUserData
})(HeaderContainer);