import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) =>{
    return (
        <div>
            <ProfileInfo data={props.data.userInfo}></ProfileInfo>
            <Posts data={props.data.postsData} dispatch={props.dispatch}></Posts>
        </div>
    );
}

export default Profile;