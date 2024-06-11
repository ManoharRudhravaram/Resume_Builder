import React from 'react'
import Novo from '../../Novo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contetx/AuthContext'
function Header() {
  let {data:{data}}  = useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <img src={Novo} alt="Novo" className='img-fluid' style={{ height: "50px", width: "50px", borderRadius: "100%" }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='/about'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='/contact'>Contact</NavLink>
            </li>

          </ul>
          <ul className=' navbar-nav me-5 '>
            {!data?.name ? 
            <li className="nav-item ms-auto">
              <NavLink className="nav-link text-white" to="/signin">
                Login
              </NavLink>
            </li>
             : <div className="dropdown">
              <button className="btn dropdown-toggle text-white" style={{ fontSize: "20px" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {data.name}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" href="#">Profile</Link></li>
                <li><Link className="dropdown-item" href="#">Logout</Link></li>
                <li><Link className="dropdown-item" href="#">Forgot Password</Link></li>
              </ul>
            </div>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header