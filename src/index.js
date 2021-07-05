import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Store";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";

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
