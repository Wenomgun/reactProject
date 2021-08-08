import {api} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {AxiosResponse} from "axios";

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
    return (dispatch: any) => {
        return api.authLogin(loginData).then((resp) => {
            const resultCode = resp.data.resultCode;
            if (resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
                dispatch(getCaptcha(null));
            } else if (resultCode === 10) {
                // show captcha
                dispatch(stopSubmit('login', {login: 'Не валидные данные', pass: 'Не валидные данные'}));
                dispatch(getCaptchaThunk());
            } else {
                dispatch(stopSubmit('login', {login: 'Не валидные данные', pass: 'Не валидные данные'}));
            }
            return resp;
        });
    }
}

export const getCaptchaThunk = () => {
    return async (dispatch: (arg0: GetCaptchaAction) => void) => {
        const resp: any = await api.getCaptcha();
        dispatch(getCaptcha(resp.data.url as string));
    }
}

export const goOutLogin = () => {
    return async (dispatch: (arg0: SetIsAuthAction) => void) => {
        const resp = await api.authLogout();
        if (resp.data.resultCode === 0) {
            dispatch(setIsAuth(0));
        }
    }
}

export default authReducer;