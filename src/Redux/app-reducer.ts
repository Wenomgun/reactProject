import {api} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AllStateType} from "./Store";

const SET_USER_DATA = 'app/setUserData';
const SET_IS_AUTH = 'app/setIsAuth';

let initialUserData = {
    isAuth: false,
    userData: {}
}

const authReducer = (state = initialUserData, action: any) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state, userData: {...action.data}, isAuth: !!action.data.email
        };
    } else if (action.type === SET_IS_AUTH) {
        return {
            ...state, isAuth: action.data
        };
    }
    return state;
}

export const setUserData = (userData: any) => ({
    type: SET_USER_DATA,
    data: userData
});

export const setIsAuth = (userId: any) => ({
    type: SET_IS_AUTH,
    data: !!userId
});

type ThunkAppType = ThunkAction<Promise<any>, AllStateType, any, any>

export const goAuth = (): ThunkAppType => {
    return (dispatch) => {
        return api.authMe().then((resp) => {
            dispatch(setUserData({
                ...resp.data.data
            }));
        });
    }
}

export const goLogin = (loginData: any): ThunkAppType => {
    return (dispatch) => {
        return api.authLogin(loginData).then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
            } else {
                dispatch(stopSubmit('login', {login: 'Не валидные данные', pass: 'Не валидные данные'}));
            }
        });
    }
}

export const goOutLogin = (): ThunkAppType => {
    return (dispatch: (arg0: { type: any; data: boolean; }) => void) => {
        return api.authLogout().then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(false));
            }
        });
    }
}

export default authReducer;