import {combineReducers} from "redux";
import messageeReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import dialogsReducer from "./Dialogs-reducer";
// import userInfoReducer from "./UserInfo-reducer";
import peopleReducer from "./People-reducer";
import profileReducer from "./Profile-reducer";
const {createStore} = require("redux");
let reducers = combineReducers({
    messagesData: messageeReducer,
    postsData: postReducer,
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    peopleData: peopleReducer
});

let Store = createStore(reducers);

export default Store;