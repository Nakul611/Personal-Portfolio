import React, { useState, useEffect} from "react";
import { SiCplusplus, SiTailwindcss, SiKotlin, SiSolidity, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";
import { FaReact, FaPython, FaRust } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { html, css, js, Reeact, tailwindcss, three, cpp, python, rust, kotlin, solidity } from "../../assets";

const Experience = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseOver = (image) => {
    if (windowWidth > 600) {
      setHoveredImage(image);
    }
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  return (
    <div className="flex flex-col items-center mt-20 mx-8 md:mx-16 gap-4 md:gap-8">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(html)} onMouseOut={handleMouseOut}>
          <AiFillHtml5 />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(css)} onMouseOut={handleMouseOut}>
          <DiCss3 />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(js)} onMouseOut={handleMouseOut}>
          <DiJavascript />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(Reeact)} onMouseOut={handleMouseOut}>
          <FaReact />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(tailwindcss)} onMouseOut={handleMouseOut}>
          <SiTailwindcss />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(three)} onMouseOut={handleMouseOut}>
          <TbBrandThreejs />
        </span>
      </div>
      <div className="flex flex-wrap justify-center mt-12 gap-8 md:gap-12">
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(cpp)} onMouseOut={handleMouseOut}>
          <SiCplusplus />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(python)} onMouseOut={handleMouseOut}>
          <FaPython />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(rust)} onMouseOut={handleMouseOut}>
          <FaRust />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(kotlin)} onMouseOut={handleMouseOut}>
          <SiKotlin />
        </span>
        <span className="bannerIcon" onMouseOver={() => handleMouseOver(solidity)} onMouseOut={handleMouseOut}>
          <SiSolidity />
        </span>
        <span className="bannerIcon">
          <SiAdobephotoshop />
        </span>
        <span className="bannerIcon">
          <SiAdobeillustrator />
        </span>
        <span className="bannerIcon">
          <SiAdobeaftereffects />
        </span>
      </div>
      {hoveredImage && windowWidth > 1024 &&(
        <div className="popup" style={{ backdropFilter: 'blur(8px)' }}>
          <img src={hoveredImage} alt="hovered" style={{ width: 500, height: 250}} />
        </div>
      )}
    </div>
  );
};

export default Experience;


