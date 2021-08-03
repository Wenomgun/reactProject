import {AllStateType} from "./Store";

export const selectProfileData = (state: AllStateType) => {
    return state.profileData.profileData;
}

export const selectPostData = (state: AllStateType) => {
    return state.profileData.postData;
}

export const selectStatus = (state: AllStateType) => {
    return state.profileData.status;
}