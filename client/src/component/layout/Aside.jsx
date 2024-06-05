import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <div className='container h-100 d-flex align-items-center justify-content-center'>
      <div className="row ">
        <div className="col-md d-flex align-items-center justify-content-evenly flex-column gap-5">
          <div>
            <h3>
            <NavLink style={{textDecoration:"none"}} to='/create'>Create Resume</NavLink>
            </h3>
          </div>
          <div>
            <h3>
            <NavLink style={{textDecoration:"none"}} to='view'>View Resume</NavLink>
            </h3>
          </div>
          <div>
            <h3>
            <NavLink style={{textDecoration:"none"}} to='/update'>Update Resume</NavLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside