// import React, { useState } from "react";
// import entrance from "../assets/entrance.jpg";
// import { useNavigate } from "react-router-dom";
// import api from "../config/api";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { user, setUser, isLogin, setIsLogin, isAdmin, setIsAdmin } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const formSubmitKro = async (e) => {
//     e.preventDefault();
//     const logindata = {
//       email: email,
//       password: password,
//     };

//     try {
//       const res = await api.post("/auth/login", logindata);
//       toast.success(res.data.message);
//       setPassword("");
//       setEmail("");
//       setUser(res.data.data);
//       sessionStorage.setItem("EventUser",JSON.stringify(res.data.data));
//       setIsLogin(true);
//       res.data.data.role === "Admin"
//         ? (setIsAdmin(true), navigate("/adminpanel"))
//         : navigate("/dashboard");
//     } catch (error) {
//       toast.error(
//         `Error : ${error.response?.status || error.message} | ${
//           error.response?.data.message || ""
//         }`
//       );
//       console.log(error);
//     }
//     console.log(logindata);
//   };

//   return (
//     <>
//       <div className="mt-[-10%] relative h-screen flex justify-center items-center">
//         <img
//           src={entrance}
//           alt=""
//           className="absolute -z-1 opacity-80 w-full"
//         />

//         <div className="min-h-screen w-200 flex items-center justify-center font-serif mt-30">
//           <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-500">
//             <h2 className="text-3xl text-center font-bold text-pink-500 mb-6 drop-shadow-md">
//               Login
//             </h2>
//             <form className="space-y-5" onSubmit={formSubmitKro}>
//               <div>
//                 <label className="text-pink-500 block mb-1">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-pink-500 block mb-1">Password</label>
//                 <input
//                   type="password"
//                   className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-[#0f172a] font-semibold py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
//               >
//                 Sign In
//               </button>
//             </form>
//             <p className="text-center text-sm text-black mt-6">
//               Don’t have an account?{" "}
//               <span
//                 className="text-pink-400 underline cursor-pointer"
//                 onClick={() => navigate("/register")}
//               >
//                 Register
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginback from "../assets/loginback.png";
import { Link } from 'react-router-dom';
import api from "../config/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  
  const {user,setUser,isLogin,setIsLogin,isAdmin,setIsAdmin} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitKro =async (e) => {
    e.preventDefault();
    const logindata = {
      email: email,
      Password: password,
    };

    console.log(logindata);
     try {
      const res = await api.post("/auth/login", {email,password});
      toast.success(res.data.message);
      setPassword("");
      setEmail("");
      setUser(res.data.data)
      setIsLogin(true)
      res.data.data.role ==="Admin" 
      ? (setIsAdmin(true), navigate("/adminpanel"))
      : navigate('/dashboard');
      
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
      console.log(error);
    }
    console.log(logindata);
  };
    
  

  return (
    <>
    <div className='bg-contain flex justify-center relative'>
      <img src={loginback} alt="" width={1521} className='absolute'/>


      <div className="min-h-screen mt-65 pt-35 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-black/1 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={formSubmitKro}>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="*******"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#C70039] hover:bg-[#de313d] transition-colors font-medium shadow-md"
          >
            Sign In
          </button>
          <div>
            Don't have an account ? <Link to={"/register"} className='text-[#C70039] font-bold'>Register</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login;