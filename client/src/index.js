import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import AuthContext from './contetx/AuthContext';
let router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{ path: '', element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }]
}, {
  path: "/signin",
  element: <Login />
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
