import React from 'react';
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";
import classes from "./Header.module.css";
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            }).then((resp) => {
                this.props.setUserData({
                    ...resp.data.data
                });
            });
    }

    render() {
        return <div className={classes.header}>
            <div>
                Logo
            </div>
            {this.props.userData.email ? <div>Logout</div> : <Header></Header> }
        </div>
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