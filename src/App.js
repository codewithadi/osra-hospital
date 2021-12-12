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
import GenSurgery from "./components/Departments/GenSurgury";
import OBGyne from "./components/Departments/OBGyne";

// departments and its routes finished
import BlogList from "./components/BlogList/BlogList";
import Services from "./pages/Services";
import Media from "./pages/Media";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import ER from "./components/Departments/ER";
import Dietitian from './components/Departments/Dietitian';
import Cardiologist from "./components/Departments/Cardiologist";
import Orthopedics from "./components/Departments/Orthopedics";
import Laboratory from "./components/Departments/Laboratory";
import SpecialTests from "./components/Departments/SpecialTests";
import Serology from "./components/Departments/Serology";
import Insurance from "./components/Services/Insurance/Insurance";

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
        <Route path="/insurance" element={<Insurance />} />

        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/departments/ophthalmology" element={<Ophthalmology />} />
        <Route path="/departments/urology" element={<Urology />} />
        <Route path="/departments/bariatic-surgery" element={<BariaticSurgery />} />
        <Route path="/departments/pediatrics" element={<Pediatrics />} />
        <Route path="/departments/dentistry" element={<Dentistry />} />
        <Route path="/departments/dermatology" element={<Dermatology />} />
        <Route path="/departments/ear-nose-throat" element={<EarNose />} />
        <Route path="/departments/er" element={<ER />} />
        <Route path="/departments/dietitian" element={<Dietitian />} />
        <Route path="/departments/cardiologist-and-internal-medicine" element={<Cardiologist />} />
        <Route path="/departments/orthopedics" element={<Orthopedics />} />
        <Route path="/departments/laboratory" element={<Laboratory />} />
        <Route path="/departments/special-tests" element={<SpecialTests />} />
        <Route path="/departments/serology" element={<Serology />} />
        <Route path="/departments/radiologic" element={<Radiology />} />
        <Route path="/departments/gastroenterology" element={<Gastroenterology />} />
        <Route path="/departments/neuro" element={<Neuro />} />
        <Route path="/departments/pshyciatric" element={<Pshyciatric />} />
        <Route path="/departments/physiotherapist" element={<Physiotherapist />} />
        <Route path="/departments/general-sergery" element={<GenSurgery />} />
        <Route path="/departments/ob-gyne" element={<OBGyne />} />  
        <Route path="/blog" element={<BlogList />} />
        <Route path="/appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
