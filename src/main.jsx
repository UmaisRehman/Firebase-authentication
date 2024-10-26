import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Product from './pages/Product.jsx'
import ProtectRoutes from './components/ProtectRoutes.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '',
        element: <ProtectRoutes component={<Home />}/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'product',
        element: <Product />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
