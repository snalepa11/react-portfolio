import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe />
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
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
