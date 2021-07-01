import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='app__wrapper'>
      <Header></Header>
      <div className='app__bodyContent'>
          <Navbar></Navbar>
          <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
