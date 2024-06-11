import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthContext from './contetx/AuthContext';
import Error from './pages/Error';
import UserProtectedRoute from './component/Route/UserProtectedRoute';
import CreateResume from './pages/user/CreateResume';
let router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <Error />,
  children: [{ path: '', element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  ]
}, {
  path: "/signin",
  element: <Login />
}, {
  path: "/signup",
  element: <Register />
},
{ path:"/create",element:<UserProtectedRoute/>,children:[{path:"",element:<CreateResume/>}]}])

function App() {
  return (
    <AuthContext>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthContext>
  )
}

export default App