import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: "mobile",
    });
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
