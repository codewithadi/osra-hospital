import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SupportService from "./components/Services/SopportService/SupportService";

// departments and its routes 
import AllDepartments from "./components/Services/AllDepartments/AllDepartments";
import Ophthalmology from "./components/Departments/Ophthalmology";
import BariaticSurgery from "./components/Departments/BariaticSurgery";
import Pediatrics from "./components/Departments/Pediatrics";
import Dentistry from "./components/Departments/Dentistry";
import Urology from "./components/Departments/Urology";
import Dermatology from "./components/Departments/Dermatology";
import TopBar from "./components/TopBar/TopBar";
import Radiology from "./components/Departments/Radiology";
import EarNose from "./components/Departments/EarNose";
import Gastroenterology from "./components/Departments/Gastroenterology ";
import Neuro from "./components/Departments/Neuro";
import Pshyciatric from "./components/Departments/Pshyciatric";
import Physiotherapist from "./components/Departments/Physiotherapist";

// departments and its routes finished
import BlogList from "./components/BlogList/BlogList";
import Services from "./pages/Services";
import Media from "./pages/Media";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/supporting-medical-services" element={<SupportService />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/departments/ophthalmology" element={<Ophthalmology />} />
        <Route path="/departments/urology" element={<Urology />} />
        <Route path="/departments/bariatic-surgery" element={<BariaticSurgery />} />
        <Route path="/departments/pediatrics" element={<Pediatrics />} />
        <Route path="/departments/dentistry" element={<Dentistry />} />
        <Route path="/departments/dermatology" element={<Dermatology />} />
        <Route path="/departments/ear-nose-throat" element={<EarNose />} />
        <Route path="/departments/radiologic" element={<Radiology />} />
        <Route path="/departments/gastroenterology" element={<Gastroenterology />} />
        <Route path="/departments/neuro" element={<Neuro />} />
        <Route path="/departments/pshyciatric" element={<Pshyciatric />} />
        <Route path="/departments/physiotherapist" element={<Physiotherapist />} />
        
       
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
