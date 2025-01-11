import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
