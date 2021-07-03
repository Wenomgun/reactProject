import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";

function App(props) {
  return (
    <div className='app__wrapper'>
      <Header></Header>
      <div className='app__bodyContent'>
          <Router>
              <Navbar></Navbar>
              <Content
                  state={props.state}
                  dispatch={props.dispatch}
              ></Content>
          </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
