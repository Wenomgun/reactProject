import React from 'react';
import classes from './ProfileInfo.module.css'
import Information from "./Information/Information";
import Reloader from "../../Common/Reloader";
import Avatar from "../../Common/Avatar";
import Status from "../Status/Status";

class ProfileInfo extends React.Component {

    render() {
        if (!this.props.profileData) {
            return <Reloader></Reloader>
        }

        return (
            <div className={classes.profileInfo}>
                <div>
                    <Status status={this.props.status}
                            setProfileStatusThunk={this.props.setProfileStatusThunk}
                    ></Status>
                </div>
                <div className={classes.profileAvaBlock}>
                    <Avatar data={this.props.profileData}></Avatar>
                    <Information data={this.props.profileData}></Information>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;