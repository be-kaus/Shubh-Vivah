import React from 'react'
import {Link} from "react-router-dom";
import weblogo from "../assets/weblogo.png"

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent flex justify-evenly text-2xl items-center gap-10 relative top-0 z-99 text-[#C70039] mt-10 font-bold">
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to={"/"}>
          <img src={weblogo} alt="" className="h-[8em]" />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to="/login">Login</Link>
    </div>
    </>
  )
}

export default Navbar;