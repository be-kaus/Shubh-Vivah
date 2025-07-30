// import React from "react";
// import background from "../assets/background.jpg";
// const Hero = () => {
//   return (
//     <>
//       <div className="mt-[-10%] relative h-200 flex justify-center items-center">
//         <img src={background} alt="" className="absolute -z-1 opacity-80" />

//         <div className="grid gap-20 justify-items-center bg-gradient-to-r from-amber-200/40 to-red-200/40 rounded-xl p-10 w-3/4">
//           <h1 className="text-9xl font-black font-[family-name:var(--customFont)]  text-center bg-[url('12609.webp')] bg-center bg-contain bg-clip-text text-transparent  p-3">
//             Turn Your Dream Into Reality
//           </h1>
//           <div className="flex gap-10 ">
//             <button className="rounded px-5 py-3 text-white  bg-yellow-500 hover:bg-yellow-600">Book Now</button>
//           <button className="rounded px-5 py-3 text-yellow-500 border-3 border-yellow-500 hover:bg-yellow-600 hover:text-white">Read More</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

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