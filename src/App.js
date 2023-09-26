// import logo from './logo.svg';
import "./App.css";
import CarOusel from "./Components/CarOusel";
import NavBar from "./Components/NavBar";
import ImgCards from "./Components/ImgCards";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
  return (

      <Router>
        <NavBar />
        <CarOusel />
        <ImgCards />
        <Banner/>
      
        <Footer />
      </Router>
   
  );
}

export default App;
