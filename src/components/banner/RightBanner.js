import React from 'react'
import { bannerImg1 } from "../../assets/index"


const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
        <img className="w-[480px] h-[400px] z-20 " src={bannerImg1} alt="bannerImg1"/>
      </div>
  )
}

export default RightBanner