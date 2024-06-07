import React from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import { Toaster } from 'react-hot-toast';

function Register() {
  
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", width: "100%" }}>
        <div className="container">
          <div className="row d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="col-md-12 d-flex flex-column  align-items-center justify-content-evenly" >
              <div style={{ border: "1px solid", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "space-evenly", width: "30%", height: "40vh", borderRadius: "10px" }}>
                <input type="text" placeholder="enter your email" name="email" value={data.email} onChange={commonHandler} />
                <input type="password" placeholder="enter your password" name="password" value={data.password} onChange={commonHandler} />
                <button onClick={submitHandler}>Register</button>
                <Toaster />
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