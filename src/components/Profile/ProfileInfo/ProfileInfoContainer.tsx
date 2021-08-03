import React, {FC} from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

type ProfileInfoPropsType = {
    userInfo: any;
}

const mapStateToProps: (state: ProfileInfoPropsType) => ProfileInfoPropsType =
    (state: ProfileInfoPropsType): ProfileInfoPropsType => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;