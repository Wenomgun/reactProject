import {combineReducers} from "redux";
import messageeReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import dialogsReducer from "./Dialogs-reducer";
import peopleReducer from "./People-reducer";
import profileReducer from "./Profile-reducer";
import authReducer from "./auth-reducer";
const {createStore} = require("redux");

let reducers = combineReducers({
    messagesData: messageeReducer,
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    peopleData: peopleReducer,
    userData: authReducer,
});

let Store = createStore(reducers);

export default Store;