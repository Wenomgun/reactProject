import classes from './ProfileInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";
import Reloader from "../../Common/Reloader";

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