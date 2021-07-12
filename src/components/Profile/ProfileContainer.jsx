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

        db.get(`/peoples.json?orderBy="userId"&startAt=${userId}&limitToFirst=1&print=pretty`)
            .then((resp) => {
                const peoplesData = resp.data;
                for (const key in peoplesData) {
                    this.props.setProfileData({ ...peoplesData[key]});
                }
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