import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginback from "../assets/loginback.png";
import { Link } from "react-router-dom";
import api from "../config/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser, isLogin, setIsLogin, isAdmin, setIsAdmin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitKro = async (e) => {
    e.preventDefault();
    const logindata = {
      email: email,
      Password: password,
    };

    console.log(logindata);
    try {
      const res = await api.post("/auth/login", { email, password });
      toast.success(res.data.message);
      setPassword("");
      setEmail("");
      setUser(res.data.data);
      setIsLogin(true);
      res.data.data.role === "Admin"
        ? (setIsAdmin(true), navigate("/adminpanel"))
        : navigate("/dashboard");
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
      <div className="bg-contain flex justify-center relative">
        <img src={loginback} alt="" width={1521} className="absolute" />

        <div className="min-h-screen mt-65 pt-35 flex items-center justify-center p-4">
          <div className="backdrop-blur-lg bg-black/1 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <form className="space-y-5" onSubmit={formSubmitKro}>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-white/90"
                  htmlFor="email"
                >
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
                <label
                  className="block mb-1 text-sm font-medium text-white/90"
                  htmlFor="password"
                >
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
                Don't have an account ?{" "}
                <Link to={"/register"} className="text-[#C70039] font-bold">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
