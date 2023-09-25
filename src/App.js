// import logo from './logo.svg';
import "./App.css";
import CarOusel from "./Components/CarOusel";
import NavBar from "./Components/NavBar";
import ImgCards from "./Components/ImgCards";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <CarOusel />
        <ImgCards />

        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
