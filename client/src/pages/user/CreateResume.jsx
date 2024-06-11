import React from 'react'
import Header from '../../component/layout/Header'
import Footer from '../../component/layout/Footer'
import Aside from '../../component/layout/Aside'

function CreateResume() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-evenly" style={{ minHeight: "80vh", width: "100%" }}>
          <div className="col-md-3" >
            <Aside />
          </div>
          <div className="col-md-8">
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateResume