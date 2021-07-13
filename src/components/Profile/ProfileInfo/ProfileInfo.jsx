import classes from './ProfileInfo.module.css'
import Information from "./Information/Information";
import Reloader from "../../Common/Reloader";
import Avatar from "../../Common/Avatar";

const ProfileInfo = (props) =>{

    if (!props.profileData) {
        return <Reloader></Reloader>
    }

    return (
       <div className={classes.profileInfo}>
           <Avatar data={props.profileData}></Avatar>
           <Information data={props.profileData}></Information>
       </div>
    );
}

export default ProfileInfo;