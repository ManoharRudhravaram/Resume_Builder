import React, { useState } from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../contetx/AuthContext";
import Spinner from "../component/layout/Spinner";
import { NavLink, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
function Login() {
  let navigate = useNavigate()
  let { loginHandler, loading, error } = useAuth()
  let [formData, setformData] = useState({ email: "", password: "" });
  function commonHandler(e) {
    let { name, value } = e.target;
    setformData((pre) => {
      return { ...pre, [name]: value }
    })
  }
  function submitHandler() {
    try {
      if (!formData.email || !formData.password) {
        toast("All fields are required*", { icon: '⚠️' })
      }
      else {
        loginHandler(formData);
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
          <div className="container-fluid" style={{ background: "linear-gradient(60deg,#66e0ff,#3366ff, #b366ff)", height: "80vh " }} >
          <div className="row" >
              <div className="col-md d-flex flex-column align-items-center justify-content-center mt-5" style={{ minHeight: "60vh" }}>
                  <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", flexDirection: "column", height: "60vh", border: "1px solid", backgroundColor: "white", borderRadius: "10px", width: "350px" }}>
                      <h2 style={{ fontFamily: "serif", fontWeight: "bolder" }}>Login</h2>
                      <div>
                          <p>E-Mail</p>
                          <div style={{
                              position: " relative",
                              width: "fit-content",
                          }}>
                              <CiUser style={{
                                  position: " absolute",
                                  left: " 10px",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  PointerEvent: "none"
                              }} />
                              <input type="text" placeholder='enter email' style={{ borderTop: "none", borderLeft: "none", borderRight: "none", paddingLeft: "30px" }} name='email' value={formData.email} onChange={commonHandler} />
                          </div>
                      </div>
                      <div >
                          <p>Password</p>
                          <div style={{
                              position: " relative",
                              width: "fit-content",
                          }}>
                              <CiLock style={{
                                  position: " absolute",
                                  left: " 10px",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  PointerEvent: "none"
                              }} />
                              <input type="password" placeholder='enter password' style={{ borderTop: "none", borderLeft: "none", borderRight: "none", paddingLeft: "30px" }} name='password' value={formData.password} onChange={commonHandler} />
                          </div>
                          <p className='text-end mt-1'>
                              <NavLink to={'/forgot-password'} style={{ textDecoration: "none" }}>Forgot password</NavLink>
                          </p>
                      </div>
                      <button className='btn' style={{
                          background: "linear-gradient(60deg,#66e0ff,#3366ff, #b366ff)",
                          border: " none",
                          color: "white",
                          width: "200px"
                      }} onClick={submitHandler}>login</button>
                      <div className='mt-2'>
                          <p>Not Having Account ? <NavLink style={{ textDecoration: "none" }} to={'/signup'}>SIGN UP</NavLink></p>
                      </div>
                  </div>
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