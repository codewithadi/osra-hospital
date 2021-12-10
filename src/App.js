import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SupportService from "./components/Services/SopportService/SupportService";
import Departments from "./components/Departments/Departments";
import BlogList from "./components/BlogList/BlogList";
import Services from "./pages/Services";
import Media from "./pages/Media";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/supporting-medical-services" element={<SupportService />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
