import {AllStateType} from "./Store";

export const selectIsAuth = (state: AllStateType) => {
    return state.userData.isAuth;
}