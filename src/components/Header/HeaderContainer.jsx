import React from 'react';
import {connect} from "react-redux";
import {goAuth} from "../../Redux/auth-reducer";
import classes from "./Header.module.css";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.goAuth();
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
    goAuth
})(HeaderContainer);