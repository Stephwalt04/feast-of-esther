import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Founder from "./Components/Founder/Founder";
import Footer from "./Components/Footer/Footer";
import Event from "./Components/Events/Event";
import RegistrationForm from "./Components/Registration Form/RegistrationForm";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder/>} />
          <Route path="/events" element={<Event/>} />
          <Route path="/registration" element={<RegistrationForm/>} />
          <Route path="/donate" element={<RegistrationForm/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
