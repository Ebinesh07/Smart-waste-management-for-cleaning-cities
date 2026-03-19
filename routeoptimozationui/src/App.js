import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Menubar from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import Howitworks from "./pages/Howitworks";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Solution from "./pages/Solution";
import Dashboard from "./pages/Dashboard";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>

      {/* Navbar */}
      <Menubar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/how-it-works" element={<Howitworks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </Router>
  );
}

export default App;