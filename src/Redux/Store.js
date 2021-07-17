import {applyMiddleware, combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {default as thunk} from 'redux-thunk'
import messageReducer from "./Message-reducer";
import dialogsReducer from "./Dialogs-reducer";
import peopleReducer from "./People-reducer";
import profileReducer from "./Profile-reducer";
import authReducer from "./auth-reducer";
const {createStore} = require("redux");

let reducers = combineReducers({
    messagesData: messageReducer,
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    peopleData: peopleReducer,
    userData: authReducer,
    form: formReducer,
});

let Store = createStore(reducers, applyMiddleware(thunk));

export default Store;