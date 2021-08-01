import {api} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = 'setUserData';
const SET_IS_AUTH = 'setIsAuth';

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

export const goAuth = () => {
    return (dispatch: (arg0: { type: string; data: any; }) => void) => {
        return api.authMe().then((resp) => {
            dispatch(setUserData({
                ...resp.data.data
            }));
        });
    }
}

export const goLogin = (loginData: any) => {
    return (dispatch: (arg0: FormAction) => void) => {
        api.authLogin(loginData).then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
            } else {
                dispatch(stopSubmit('login', {login: 'Не валидные данные', pass: 'Не валидные данные'}));
            }
        });
    }
}

export const goOutLogin = () => {
    return (dispatch: (arg0: { type: any; data: boolean; }) => void) => {
        api.authLogout().then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(false));
            }
        });
    }
}

export default authReducer;