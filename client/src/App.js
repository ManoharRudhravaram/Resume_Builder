import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  axios.defaults.baseURL="http://127.0.0.1:8000"
async function print(){
  try {
    let result=await axios.post('auth/v1/signin',{ email:"manohar@gmail.com",
    password:"mern@1234"});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  print()
},[])
  return (
    <div className="App">
      <header className="App-header">
      <div>website under maintainance</div>
      </header>
    </div>
  );
}

export default App;
