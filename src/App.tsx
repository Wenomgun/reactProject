import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "./Redux/Store";

type AppPropsType = {
    state?: any;
    dispatch?: any;
}

class App extends Component<AppPropsType, any> {
    render() {
        return (
            <div className='app__wrapper'>
                <Router>
                    <HeaderContainer/>
                    <div className='app__bodyContent'>
                        <Navbar/>
                        <Content
                            state={this.props.state}
                            dispatch={this.props.dispatch}
                            />
                    </div>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

class MainApp extends Component {
    render(): JSX.Element {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        )
    }
}

export default MainApp;
