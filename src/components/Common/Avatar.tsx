import classes from './Avatar.module.css'
import {FC} from "react";

type AvatarType = {
    data: AvatarData;
}

type AvatarData = {
    photos: {
        small: string;
        large: string;
    };
    name: string;
    fullName: string;
    isOnline: boolean;
}

const Avatar: FC<AvatarType> = ({data}): JSX.Element => {

    function renderAvatar(data: AvatarData): JSX.Element {
        const photos = data && data.photos;
        const photo = photos.small || photos.large;
        const simb = data && data.name?.split(' ') || data.fullName?.split(' ');
        const firstName = simb[0].slice(0, 1);
        const lastName = simb.length > 1 ? simb[1].slice(0, 1) : '';

        if (photo) {
            return (
                <img src={photo} alt={'Фото'}/>
            );
        } else {
            return (
                <div className={classes.blobAvatar}>
                    <div>{firstName} {lastName}</div>
                </div>
            );
        }
    }

    function renderOnline(isOnline: boolean): JSX.Element | null {
        if (!isOnline) {
            return null;
        }

        return (
            <div className={classes.isOnline}/>
        );
    }

    return (
       <div className={classes.avatar}>
           {renderAvatar(data)}
           {renderOnline(data.isOnline)}
       </div>
    );
}

export default Avatar;