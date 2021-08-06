import React, {ChangeEvent, SyntheticEvent} from 'react';
import classes from './ProfileInfo.module.css'
import Information from "./Information/Information";
import Reloader from "../../Common/Reloader";
import Avatar from "../../Common/Avatar";
import Status from "../Status/Status";

type ProfileInfoPropsType = {
    profileData: any;
    status: string;
    setProfileStatusThunk: Function;
    savePhoto: Function;
    isOwner: boolean;

}

class ProfileInfo extends React.PureComponent<ProfileInfoPropsType> {

    changeAvatar = (e: ChangeEvent<HTMLInputElement>): void  => {
        const files = e.target.files;
        if (files && files.length) {
            this.props.savePhoto(files[0]);
        }
    }

    render() {
        if (!this.props.profileData) {
            return <Reloader/>
        }

        return (
            <div className={classes.profileInfo}>
                <div>
                    <Status status={this.props.status}
                            setProfileStatusThunk={this.props.setProfileStatusThunk}
                    />
                </div>
                <div className={classes.profileAvaBlock}>
                    <Avatar data={this.props.profileData}>
                    </Avatar>
                    <div>
                        <Information data={this.props.profileData}/>
                        {this.props.isOwner && <input type={'file'} onChange={this.changeAvatar}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;