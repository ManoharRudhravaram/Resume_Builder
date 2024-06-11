import React, { useState } from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import instance from "../config/axios";

function Register() {
  let navigate = useNavigate();
  let [formData, setformData] = useState({ name: "", email: "", password: "", gender: "", phone: "", secret: "" })
  function commonHandler(e) {
    let { name, value } = e.target;
    setformData((pre) => {
      return { ...pre, [name]: value }
    })
  }

  async function submitHandler() {
    try {
      if (!formData.name || !formData.email || formData.password || formData.gender || !formData.phone || !formData.secret) {
        toast("All fields are required")
      }
      else {
        let { data } = await instance.post('/auth/v1/signup', formData);
        if (data.success) {
          toast(data.message)
          navigate("/signin")
        }
      }
    } catch (error) {
      toast(error.message)
    }
  }
  return (
    <>
      <Header />
      <Toaster />
      <main style={{ minHeight: "70vh", width: "100%" }}>
        <div className="container-fluid" style={{ background: "linear-gradient(60deg,#66e0ff,#3366ff, #b366ff)", height: "80vh " }} >
          <div className="row" >
            <div className="col-md d-flex flex-column align-items-center justify-content-center mt-5" style={{ minHeight: "70vh" }}>
              <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", flexDirection: "column", height: "fit-content", border: "1px solid", backgroundColor: "white", borderRadius: "10px", width: "350px" }}>
                <h2 style={{ fontFamily: "serif", fontWeight: "bolder", marginTop: "10px" }}>Register</h2>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input onChange={commonHandler} type="text" class="form-control" id="name" placeholder="Enter your name" name="name" value={formData.name} />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input onChange={commonHandler} type="email" class="form-control" id="email" placeholder="Enter your email" name="email" value={formData.email} />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input onChange={commonHandler} type="password" class="form-control" id="password" placeholder="Enter your password" name="password" value={formData.password} />
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input onChange={commonHandler} type="tel" class="form-control" id="phone" placeholder="Enter your phone number" name="phone" value={formData.phone} />
                </div>
                <div class="form-group">
                  <label for="security">Security Answer</label>
                  <input onChange={commonHandler} type="text" class="form-control" id="security" placeholder="Enter your nick name" name="secret" value={formData.secret} />
                </div>
                <div class="form-group" style={{ display: "flex", justifyContent: "space-evenly", width: "250px" }}>
                  <label for="phone">Gender</label>
                  <input onClick={commonHandler} type="radio" placeholder="Enter your phone number" name="gender" value="male" checked={formData.gender === "male"} /> male
                  <input onClick={commonHandler} type="radio" placeholder="Enter your phone number" name="gender" value="female" checked={formData.gender === 'female'} /> female
                </div>
                <button className='btn' style={{
                  background: "linear-gradient(60deg,#66e0ff,#3366ff, #b366ff)",
                  border: " none",
                  color: "white",
                  width: "200px"
                }} onClick={submitHandler}>register</button>
                <div className='mt-2'>
                  <p>Already have Account ? <NavLink style={{ textDecoration: "none" }} to={'/signin'}>SIGN IN</NavLink></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Register;