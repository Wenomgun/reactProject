import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {getProfileData, getProfileStatus, savePhotoThunk, setProfileStatusThunk} from "../../Redux/Profile-reducer";
import {withRouter} from 'react-router-dom';
import {authRedirectContainer} from "../hoc/authRedirectContainer";
import {compose} from "redux";
import PostsContainer from "./Posts/PostsContainer";
import {goAuth} from "../../Redux/auth-reducer";
import {selectPostData, selectProfileData, selectStatus} from "../../Redux/profile-selectors";

type ProfileContainerPropsType = {
    match: any;
    getProfileData: Function;
    getProfileStatus: Function;
    goAuth: Function;
    setProfileStatusThunk: Function;
    savePhotoThunk: Function;
    profileData: any;
    postData: any;
    status: string;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
    refreshProfile() {
        const userId = this.props.match.params.userId;
        if (userId) {
            this.props.getProfileData(userId);
            this.props.getProfileStatus(userId);
        } else {
            this.props.goAuth().then((resp: any) => {
                const userId = resp.data.data.id;
                this.props.getProfileData(userId);
                this.props.getProfileStatus(userId);
            });
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<any>, snapshot?: any) {
        const prevUserId = prevProps.match.params.userId;
        const userId = this.props.match.params.userId;
        if (userId !== prevUserId) {
            this.refreshProfile();
        }
    }

    render() {
        return <div>
            <ProfileInfo profileData={this.props.profileData}
                         isOwner={!this.props.match.params.userId}
                         setProfileStatusThunk={this.props.setProfileStatusThunk}
                         savePhoto={this.props.savePhotoThunk}
                         status={this.props.status}
            >
            </ProfileInfo>
            <PostsContainer postData={this.props.postData}/>
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        profileData: selectProfileData(state),
        postData: selectPostData(state),
        status: selectStatus(state),
    }
}

export default compose(
        connect(mapStateToProps, {
            getProfileData, getProfileStatus,
            setProfileStatusThunk, goAuth, savePhotoThunk
        }),
        authRedirectContainer,
        withRouter,
    )(ProfileContainer) as any;