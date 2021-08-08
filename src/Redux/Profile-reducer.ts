import {api} from "../api/api";
import {ProfileDataType} from "../components/Profile/ProfileContainer";

const SET_PROFILE_DATA = 'profile/setProfileData';
const SET_PROFILE_STATUS = 'profile/setProfileStatus';
const CHANGE_PROFILE_PHOTO = 'profile/changeProfilePhoto';
const SET_PROFILE_DETAIL = 'profile/setProfileDetail';

type SetProfileDataAction = { type: typeof SET_PROFILE_DATA; data?: any; }
type SetProfileStatusAction = { type: typeof SET_PROFILE_STATUS; data?: any; }
type ChangeProfilePhotoAction = { type: typeof CHANGE_PROFILE_PHOTO; data?: any; }
type SetProfileDetailAction = { type: typeof SET_PROFILE_DETAIL; data?: any; }

let initialProfileData = {
    profileData: null as any,
    postData: [
        {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны',  date: new Date(), likes: 4, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
        {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
        {fio: 'Ivan Ivanov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 2, photoUser: 'https://png.clipart.me/istock/previews/4090/40905468-single-vector-male-avatar.jpg'}
    ] as any[],
    status: '' as string | null
}

type InitialProfile = typeof initialProfileData;
type ProfileAction = SetProfileDataAction | SetProfileStatusAction | ChangeProfilePhotoAction | SetProfileDetailAction;

const profileReducer = (state: InitialProfile = initialProfileData, action: ProfileAction) => {
    if (action.type === SET_PROFILE_DATA) {
        return {
            ...state, profileData: action.data
        };
    } else if (action.type === SET_PROFILE_STATUS) {
        return {
            ...state, status: action.data || 'Изменить статус'
        };
    } else if (action.type === CHANGE_PROFILE_PHOTO) {
        return {
            ...state, profileData: {...state.profileData, photos: action.data}
        };
    } else if (action.type === SET_PROFILE_DETAIL) {
        return {
            ...state, profileData: {...state.profileData, ...action.data}
        };
    }
    return state;
}

export const setProfileData = (profileData: any): SetProfileDataAction => ({
    type: SET_PROFILE_DATA,
    data: profileData
});

export const setProfileStatus = (profileStatus: any): SetProfileStatusAction => ({
    type: SET_PROFILE_STATUS,
    data: profileStatus
});

export const changeProfilePhoto = (file: any): ChangeProfilePhotoAction => ({
    type: CHANGE_PROFILE_PHOTO,
    data: file
});

export const setProfileDetail = (details: any): SetProfileDetailAction => ({
    type: SET_PROFILE_DETAIL,
    data: details
});

export const getProfileData = (id: number) => {
    return async (dispatch: (arg0: SetProfileDataAction) => void) => {
        const data = await api.getUserProfile(id);
        dispatch(setProfileData(data));
    }
}

export const getProfileStatus = (id: number) => {
    return async (dispatch: (arg0: SetProfileStatusAction) => void) => {
        const data = await api.getProfileStatus(id);
        dispatch(setProfileStatus(data));
    }
}

export const setProfileStatusThunk = (status: string) => {
    return async (dispatch: (arg0: SetProfileStatusAction) => void) => {
        await api.changeProfileStatus(status);
        dispatch(setProfileStatus(status));
    }
}

export const savePhotoThunk = (file: any) => {
    return async (dispatch: (arg0: ChangeProfilePhotoAction) => void) => {
        const data = await api.changeProfilePhoto(file);
        dispatch(changeProfilePhoto(data.data.photos));
    }
}

export const setProfileDetailsThunk = (newDatail: ProfileDataType) => {
    return async (dispatch: (arg0: (dispatch: (arg0: SetProfileDataAction) => void) => Promise<void>) => void) => {
        const data = await api.setProfileDetail(newDatail);
        // dispatch(setProfileDetail(newDatail));
        dispatch(getProfileData(newDatail.userId));
    }
}

export default profileReducer;