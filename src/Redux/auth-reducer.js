import {api} from "../api/api";

const SET_USER_DATA = 'setUserData';
const SET_IS_AUTH = 'setIsAuth';

let initialUserData = {
    isAuth: false,
    userData: {}
}

const authReducer = (state = initialUserData, action) => {
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

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    data: userData
});

export const setIsAuth = (userId) => ({
    type: SET_IS_AUTH,
    data: !!userId
});

export const goAuth = () => {
    return (dispatch) => {
        api.authMe().then((resp) => {
            dispatch(setUserData({
                ...resp.data.data
            }));
        });
    }
}

export const goLogin = (loginData) => {
    return (dispatch) => {
        api.authLogin(loginData).then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(resp.data.data.userId));
            }
        });
    }
}

export const goOutLogin = () => {
    return (dispatch) => {
        api.authLogout().then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(setIsAuth(false));
            }
        });
    }
}

export default authReducer;