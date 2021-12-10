import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import SupportService from "./components/Services/SopportService/SupportService";
import Departments from "./components/Departments/Departments";
import BlogList from "./components/BlogList/BlogList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/supporting-medical-services" element={<SupportService />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
