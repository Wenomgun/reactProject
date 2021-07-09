import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Store";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwmFT53Ko3KMBpPV2uR6ynl3IMRohF2Zo",
    authDomain: "anthill-c45d7.firebaseapp.com",
    databaseURL: "https://anthill-c45d7-default-rtdb.firebaseio.com",
    projectId: "anthill-c45d7",
    storageBucket: "anthill-c45d7.appspot.com",
    messagingSenderId: "1030441237596",
    appId: "1:1030441237596:web:15e31b9e5e97fed2177a99"
};
const peoples = [
    {userId: 1,
        fullName: 'Alex Copnic',
        description: 'I`m programmer',
        photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
        address: 'Moscow',
        isFollowed: false
    },
    {userId: 2,
        fullName: 'Rob Dilon',
        description: 'I`m boss',
        photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
        address: 'Moscow',
        isFollowed: true
    },
    {userId: 3,
        fullName: 'Soft Gopnic',
        description: 'I`m driver',
        photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
        address: 'Omsk',
        isFollowed: false
    },
];
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
// db.ref('peoples').push(peoples);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>*/}
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

window.state = store.getState();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
