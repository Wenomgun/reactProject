import {AllStateType} from "./Store";

export const selectIsAuth = (state: AllStateType) => {
    return state.userData.isAuth;
}

export const selectCaptcha = (state: AllStateType) => {
    return state.userData.captcha;
}