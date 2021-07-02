import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const dialogsData = [
        {name: 'Alex', userId: '1'},
        {name: 'Martin', userId: '2'},
        {name: 'Locost', userId: '3'},
        {name: 'Rob', userId: '4'},
        {name: 'Protost', userId: '5'},
        {name: 'Ghost', userId: '6'},
    ];
    const messagesData = [
        {text: 'Hi, how are you?', userId: '1'},
        {text: 'Fine, Thanks', userId: '2'},
        {text: 'and how are you?', userId: '3'},
        {text: 'Good', userId: '4'},
        {text: 'Where are you from?', userId: '5'},
        {text: 'Moscow', userId: '6'},
    ];

  return (
    <div className='app__wrapper'>
      <Header></Header>
      <div className='app__bodyContent'>
          <Router>
              <Navbar></Navbar>
              <Content dialogsData={dialogsData}
                       messagesData={messagesData}
              ></Content>
          </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
