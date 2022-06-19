import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Testimonals from "./Components/testimonials/Testimonials";
import {useEffect , useState } from "react";
import Menu from "./Components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
   
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonals/>
        <Contact />
      </div>
      </div>
    </>
  );
}

export default App;
