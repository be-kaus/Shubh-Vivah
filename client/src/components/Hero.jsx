import React from "react";
import homepage from "../assets/homepage.png";

const Hero = () => {
  return (
    <>
      <div className="bg-cover relative flex justify-center ">
        <img src={homepage} alt="" className="absolute"/>

        {/* <div className=" justify-items-center align-middle z-10">
          <h1 className=" mt-100 text-5xl font-extrabold text-center bg-gradient-to-r from-[#C70039] to-cyan-600 bg-clip-text text-transparent">
            Together is a Beautiful Place to Be
          </h1>
          
        </div> */}
      </div>
      {/* <div className="flex justify-center gap-3 mr-140 mt-1">
            <button className="bg-[#d52121] hover:bg-[#DE3163] text-white font-medium px-5 py-2.5 rounded-2xl shadow-inner backdrop-blur-sm transition-all duration-300">Book Now</button>
             
            <button className="bg-[#ce2b2b] text-white font-medium px-5 py-2.5 rounded-2xl shadow-inner backdrop-blur-sm transition-all duration-300">Read More</button>
      </div> */}
    </>
  )
}

export default Hero;