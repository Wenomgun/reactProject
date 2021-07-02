import classes from './Avatar.module.css'

const Avatar = (props) => {

    function renderAvatar(data) {
        const photo = data.photo;
        const firstName = data.firstName.slice(0, 1);
        const lastName = data.lastName.slice(0, 1);
        if (photo) {
            return (
                <img src={photo}/>
            );
        } else {
            return (
                <div className={classes.blobAvatar}>
                    <div>{firstName} {lastName}</div>
                </div>
            );
        }
    }

    function renderOnline(isOnline) {
        if (!isOnline) {
            return null;
        }

        return (
            <div className={classes.isOnline}></div>
        );
    }

    return (
       <div className={classes.avatar}>
           {renderAvatar(props.data)}
           {renderOnline(props.data.isOnline)}
       </div>
    );
}

export default Avatar;