import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 pb-20 items-center flex border-b-[1px] font-titleFont border-b-black flex-col md:flex-row"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
