import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {getProfileData} from "../../Redux/Profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {authRedirectContainer} from "../hoc/authRedirectContainer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileData(this.props.match.params.userId);
    }

    render() {
        return <div>
            <ProfileInfo profileData={this.props.profileData}></ProfileInfo>
            <Posts postData={this.props.postData}></Posts>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileData.profileData,
        postData: state.profileData.postData
    }
}

export default compose(
    connect(mapStateToProps, {getProfileData}),
        authRedirectContainer,
        withRouter
    )(ProfileContainer);