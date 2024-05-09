import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/resume",
    element: <Resume />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
