import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className="bg-dark text-center text-white text-lg-start">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">About</h5>
        <p>
          Our company is dedicated to providing top-notch services and products. Learn more about our journey and values.
        </p>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>
        <p>Feel free to reach out to us for any inquiries or support. We're here to help!</p>
        <ul className="list-unstyled mb-0">
          <li>Email: support@example.com</li>
          <li>Phone: +123-456-7890</li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">License</h5>
        <p>Our products are licensed under the XYZ License. Please review the terms and conditions.</p>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled text-white">
          <li><Link href="#about" className="text-white">About</Link></li>
          <li><Link href="#contact" className="text-white">Contact</Link></li>
          <li><Link href="#license" className="text-white">License</Link></li>
          <li><Link href="#privacy-policy" className="text-white">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2024 Your Company. All rights reserved.
  </div>
</footer>

  )
}

export default Footer