import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner"
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contacts/Contact";
import StarsCanvas from "./components/Stars";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <div className="relative z-0">
          <Banner />
          <StarsCanvas />
        </div>
        <Features />
        <Projects />
        <Resume />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
