import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {getProfileData, getProfileStatus, setProfileStatusThunk} from "../../Redux/Profile-reducer";
import {withRouter} from 'react-router-dom';
import {authRedirectContainer} from "../hoc/authRedirectContainer";
import {compose} from "redux";
import PostsContainer from "./Posts/PostsContainer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileData(this.props.match.params.userId);
        this.props.getProfileStatus(this.props.match.params.userId);
    }

    render() {
        return <div>
            <ProfileInfo profileData={this.props.profileData}
                         setProfileStatusThunk={this.props.setProfileStatusThunk}
                         status={this.props.status}
            >
            </ProfileInfo>
            <PostsContainer postData={this.props.postData}></PostsContainer>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileData.profileData,
        postData: state.profileData.postData,
        status: state.profileData.status,
    }
}

export default compose(
        connect(mapStateToProps, {getProfileData, getProfileStatus, setProfileStatusThunk}),
        authRedirectContainer,
        withRouter
    )(ProfileContainer);