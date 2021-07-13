import React from 'react';
import {connect} from "react-redux";
import db from "../../Redux/db";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {setProfileData} from "../../Redux/Profile-reducer";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId || 1;

        db.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((resp) => {
                const userData = resp.data;
                this.props.setProfileData(userData);
            });
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
        postData: state.profileData.postData,
    }
}
let ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setProfileData
})(ProfileContainerWithRouter);