import './App.css'
import Home from "./Home";
import Project from "./Projects";
import LProject from './Learning';
import About from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function App() {

  return (
    <>
      <div>
        <Header />
        < Home/>
        <About />
        < Project/>
        < LProject/>
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default App
