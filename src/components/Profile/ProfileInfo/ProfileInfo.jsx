import classes from './ProfileInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";

const ProfileInfo = () =>{
    return (
       <div className={classes.profileInfo}>
           <Avatar></Avatar>
           <Information></Information>
       </div>
    );
}

export default ProfileInfo;