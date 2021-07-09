import {combineReducers} from "redux";
import messageeReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import dialogsReducer from "./Dialogs-reducer";
import userInfoReducer from "./UserInfo-reducer";
import peopleReducer from "./People-reducer";
const {createStore} = require("redux");
let reducers = combineReducers({
    messagesData: messageeReducer,
    postsData: postReducer,
    dialogsData: dialogsReducer,
    userInfo: userInfoReducer,
    peopleData: peopleReducer
});

let Store = createStore(reducers);

export default Store;