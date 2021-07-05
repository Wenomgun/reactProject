import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) =>{
    return (
        <div>
            <ProfileInfoContainer></ProfileInfoContainer>
            <PostsContainer></PostsContainer>
        </div>
    );
}

export default Profile;