import {api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'setUserData';
const SET_IS_AUTH = 'setIsAuth';

type SetUserDataAction = {
    type: typeof SET_USER_DATA;
    data: any;
}

type SetIsAuthAction = {
    type: typeof SET_IS_AUTH;
    data?: any;
}

type AuthAction = SetUserDataAction | SetIsAuthAction;

export type InitialUserData = {
    isAuth: boolean;
    userData: any;
}

let initialUserData: InitialUserData = {
    isAuth: false,
    userData: {}
}

const authReducer = (state: InitialUserData = initialUserData, action: AuthAction) => {
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

export const setUserData = (userData: any): SetUserDataAction => ({
    type: SET_USER_DATA,
    data: userData
});

export const setIsAuth = (userId: number): SetIsAuthAction => ({
    type: SET_IS_AUTH,
    data: !!userId
});

export const goAuth = () => {
    return (dispatch: (arg0: SetUserDataAction) => void) => {
        return api.authMe().then((resp) => {
            dispatch(setUserData({
                ...resp.data.data
            }));
            return resp;
        });
    }
}

export const goLogin = (loginData: any) => {
    return (dispatch: (arg0: SetIsAuthAction) => void) => {
        return api.authLogin(loginData).then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
            } else {
                dispatch(stopSubmit('login', {login: 'Не валидные данные', pass: 'Не валидные данные'}));
            }
            return resp;
        });
    }
}

export const goOutLogin = () => {
    return (dispatch: (arg0: SetIsAuthAction) => void) => {
        api.authLogout().then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(0));
            }
        });
    }
}

export default authReducer;