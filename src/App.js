import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/LandingPages/Contact/Contact";
import Overview from "./pages/LandingPages/Overview/Overview.js";
import Mcfy from "./pages/LandingPages/Mcfy/Mcfy";
import Pricing from "./pages/LandingPages/Pricing/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/mcfy" element={<Mcfy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
