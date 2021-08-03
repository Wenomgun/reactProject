import {applyMiddleware, combineReducers, compose} from "redux";
import {reducer as formReducer} from 'redux-form';
import {default as thunk} from 'redux-thunk'
import messageReducer from "./Message-reducer";
import dialogsReducer from "./Dialogs-reducer";
import peopleReducer from "./People-reducer";
import profileReducer from "./Profile-reducer";
import authReducer from "./auth-reducer";
import postReducer from "./Post-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
const {createStore} = require("redux");

let rootReducer = combineReducers({
    messagesData: messageReducer,
    postData: postReducer,
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    peopleData: peopleReducer,
    userData: authReducer,
    form: formReducer,
});
type RootReducerType = typeof rootReducer;
export type AllStateType = ReturnType<RootReducerType>

let Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;