import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const authRedirectContainer = (Component) =>{
    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login'></Redirect>
            }
            return <Component {...this.props}></Component>
        }
    }

    const mapStateToPropsAuthContainer = (state) => {
        return {
            isAuth: state.userData.isAuth
        }
    }

    let RedirectContainerConnected = connect(mapStateToPropsAuthContainer)(RedirectContainer)

    return RedirectContainerConnected;
}
