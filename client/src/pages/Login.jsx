import React, { useState } from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../contetx/AuthContext";
import Spinner from "../component/layout/Spinner";
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
function Login() {
  let navigate = useNavigate()
  let { loginHandler, loading, error } = useAuth()
  let [formdata, setformdata] = useState({ email: "", password: "" });
  function commonHandler(e) {
    let { name, value } = e.target;
    setformdata((pre) => {
      return { ...pre, [name]: value }
    })
  }
  function submitHandler() {
    try {
      if (!formdata.email || !formdata.password) {
        toast("All fields are required*", { icon: '⚠️' })
      }
      else {
        loginHandler(formdata);
         navigate("/")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <Toaster />
      <Header />
      <main style={{ minHeight: "70vh", width: "100%" }}>
        {loading && <div className="container">
          <div className="row d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="col-md d-flex flex-column align-items-center justify-content-center mt-5">
              <Spinner />
            </div>
          </div>
        </div>}
        {!loading && !error &&
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-5 d-flex align-items-center justify-content-center">
                <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="user" className="img-fluid" style={{ borderRadius: "50%", height: "300px", width: "300px" }} />
              </div>
              <div className=" text-white col-md-5 d-flex flex-column  align-items-center justify-content-evenly border" style={{ background: "linear-gradient(to bottom,#1a53ff, #99bbff,#751aff)" }} >
                <h4>Member Login</h4>
                <div className=" d-flex justify-content-evenly align-items-center gap-2 ">
                  <CiMail style={{ fontSize: "25px" }} />
                  <input type="text" placeholder=" enter your email" value={formdata.email} name="email" onChange={commonHandler} style={{ backgroundColor: "#eeeee4", borderRadius: "10px" }} />
                </div>
                <div className="d-flex justify-content-evenly align-items-center gap-2">
                  < CiLock style={{ fontSize: "25px" }} />
                  <input type="password" value={formdata.password} placeholder="enter your password" name="password" onChange={commonHandler} style={{ borderRadius: "10px", backgroundColor: "#eeeee4", color: "black" }} />
                </div>
                <button className=" btn btn-light" onClick={submitHandler}>Login</button>
              </div>
            </div>
          </div>}
        {!loading && error && <h1>Oops...</h1>}
      </main>
      <Footer />
    </>
  );
}

export default Login;