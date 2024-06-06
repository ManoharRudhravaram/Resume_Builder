import React from 'react'
import {HashLoader} from 'react-spinners';

function Spinner() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md">
            <HashLoader color="#36d7b7"/>
            </div>
        </div>
    </div>
  )
}

export default Spinner