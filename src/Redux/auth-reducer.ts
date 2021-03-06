import {api} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AllStateType} from "./Store";

const SET_USER_DATA = 'auth/setUserData';
const SET_IS_AUTH = 'auth/setIsAuth';
const GET_CAPTCHA = 'auth/getCaptcha';

type SetUserDataAction = { type: typeof SET_USER_DATA; data: any; }
type SetIsAuthAction = { type: typeof SET_IS_AUTH; data?: any; }
type GetCaptchaAction = { type: typeof GET_CAPTCHA; data?: any; }

type AuthAction = SetUserDataAction | SetIsAuthAction | GetCaptchaAction;

export type InitialUserData = {
    isAuth: boolean;
    userData: any;
    captcha: string | null;
}

let initialUserData: InitialUserData = {
    isAuth: false,
    userData: {},
    captcha: null
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
    } else if (action.type === GET_CAPTCHA) {
        return {
            ...state, captcha: action.data
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

export const getCaptcha = (url: string | null): GetCaptchaAction => ({
    type: GET_CAPTCHA,
    data: url
});

type ThunkAuthType = ThunkAction<Promise<any>, AllStateType, any, AuthAction>

export const goAuth = (): ThunkAuthType => {
    return (dispatch) => {
        return api.authMe().then((resp) => {
            dispatch(setUserData({
                ...resp.data.data
            }));
            return resp;
        });
    }
}

export const goLogin = (loginData: any): ThunkAuthType => {
    return (dispatch) => {
        return api.authLogin(loginData).then((resp) => {
            const resultCode = resp.data.resultCode;
            if (resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
                dispatch(getCaptcha(null));
            } else if (resultCode === 10) {
                // show captcha
                dispatch(stopSubmit('login', {login: '???? ???????????????? ????????????', pass: '???? ???????????????? ????????????'}));
                dispatch(getCaptchaThunk());
            } else {
                dispatch(stopSubmit('login', {login: '???? ???????????????? ????????????', pass: '???? ???????????????? ????????????'}));
            }
            return resp;
        });
    }
}

export const getCaptchaThunk = (): ThunkAuthType => {
    return async (dispatch) => {
        const resp: any = await api.getCaptcha();
        dispatch(getCaptcha(resp.data.url as string));
    }
}

export const goOutLogin = (): ThunkAuthType => {
    return async (dispatch) => {
        const resp = await api.authLogout();
        if (resp.data.resultCode === 0) {
            dispatch(setIsAuth(0));
        }
    }
}

export default authReducer;