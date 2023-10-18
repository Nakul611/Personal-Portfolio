import React from 'react';
import { bannerImg1 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <img className="w-full md:w-[480px] md:h-[400px] z-20" src={bannerImg1} alt="bannerImg1"/>
      </div>
  )
}

export default RightBanner;