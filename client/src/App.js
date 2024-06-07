import './App.css';
import React, { useEffect }  from 'react'
// import instance from './config/axios';
import Auth from './Auth';
import axios from 'axios';
function App() {
  async function print()
  {
    try{
      let result=await axios.post('/auth/v1/signin',{email:"manohar@gmail.com",password:'mern@1234'})
      let data= result.data;
      localStorage.setItem('access',data.access)
      localStorage.setItem('refresh',data.refresh)
    }
    catch(err)
    {
      console.log(err.message)
    }
  }
      useEffect(()=>{
       print()
      },[])
  return (
    <div className="App">
      <header className="App-header">
         <h1>Website under the maintenece</h1>
         <Auth/>
      </header>
    </div>
  );
}

export default App;