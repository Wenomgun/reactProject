import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className='app__wrapper'>
                <Router>
                    <HeaderContainer></HeaderContainer>
                    <div className='app__bodyContent'>
                        <Navbar></Navbar>
                        <Content
                            state={this.props.state}
                            dispatch={this.props.dispatch}
                        ></Content>
                    </div>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }
}

export default App;
