import {api} from "../api/api";

const SET_USER_DATA = 'setUserData';

let initialUserData = {
    isAuth: false,
    userData: {}
}

const authReducer = (state = initialUserData, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state, userData: {...action.data}, isAuth: true
        };
    }
    return state;
}

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    data: userData
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

export default authReducer;