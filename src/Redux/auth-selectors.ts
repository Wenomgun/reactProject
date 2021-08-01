import {InitialUserData} from "./auth-reducer";

export const selectIsAuth = (state: InitialUserData) => {
    return state.userData.isAuth;
}