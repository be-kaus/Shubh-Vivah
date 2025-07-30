import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminPanel from "./pages/AdminPanel";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Services from "./pages/Services";
import MarriageStories from "./pages/Stories";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stories" element={<MarriageStories />} />
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// import React from 'react'
// import Navbar from './components/Navbar';
// import Home from "./components/Home";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Login from './components/Login';
// import Contact from './components/Contact';
// import Register from './components/Register';
// import Stories from './components/Stories';
// import Services from './components/Services';
// import About from './components/About';
// import {Toaster} from "react-hot-toast";
// import CustomerDashboard from './components/CustomerDashboard';
// import AdminPanel from './components/AdminPanel';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <header>
//       <Toaster/>
//       <Navbar/>
//     </header>

//     <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/login" element={<Login />} />
//      <Route path="/contact" element={<Contact />} />
//      <Route path="/register" element={<Register />} />
//      <Route path="/stories" element={<Stories />} />
//      <Route path="/services" element={<Services />} />
//      <Route path="/about" element={<About />} />
//      <Route path="/dashboard" element={<CustomerDashboard />} />
//      <Route path="/adminpanel" element={<AdminPanel />} />
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App;