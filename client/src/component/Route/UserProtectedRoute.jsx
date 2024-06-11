import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contetx/AuthContext';
import axios from 'axios';
import Authenticate from '../layout/Authenticate';

function UserProtectedRoute() {
  let { data: { access } } = useAuth();
  let [ok, setOk] = useState(false);
  //to access dashboard
  async function isValidUser() {
    let { data } = await axios.get(`/auth/v1/token`, { headers: { Authorization: access } })
    setOk(data.ok)
  }
  useEffect(() => {
    isValidUser()
  }, [ok, access])

  return ok ? <Outlet /> : <Authenticate/>
}

export default UserProtectedRoute