import classes from './ProfileInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";

const ProfileInfo = (props) =>{
    return (
       <div className={classes.profileInfo}>
           <Avatar data={props.userInfo}></Avatar>
           <Information data={props.userInfo}></Information>
       </div>
    );
}

export default ProfileInfo;