import React from "react";

// layouts
import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import About from "../layout/About";
import Roadmap from "../layout/Roadmap";
import FAQ from "../layout/FAQ";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
