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

// const firebaseConfig = {
//     apiKey: "AIzaSyAwmFT53Ko3KMBpPV2uR6ynl3IMRohF2Zo",
//     authDomain: "anthill-c45d7.firebaseapp.com",
//     databaseURL: "https://anthill-c45d7-default-rtdb.firebaseio.com",
//     projectId: "anthill-c45d7",
//     storageBucket: "anthill-c45d7.appspot.com",
//     messagingSenderId: "1030441237596",
//     appId: "1:1030441237596:web:15e31b9e5e97fed2177a99"
// };
//
// firebase.initializeApp(firebaseConfig);

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
reportWebVitals();
