import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <div className='app-bodyContent'>
          <Navbar></Navbar>
          <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
