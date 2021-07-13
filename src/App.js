import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <div className='app__wrapper'>
        <Router>
          <HeaderContainer></HeaderContainer>
          <div className='app__bodyContent'>
                  <Navbar></Navbar>
                  <Content
                      state={props.state}
                      dispatch={props.dispatch}
                  ></Content>
          </div>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
