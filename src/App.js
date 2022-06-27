import './App.css';
import AboutMe from './Page/AboutMe';
import ContactMe from './Page/ContactMe';
import Home from './Page/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MyServices from "./Page/MyServices";

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Home />
      <AboutMe />
      <MyServices/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
