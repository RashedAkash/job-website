import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import Context from './Context/Context.jsx'
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
 <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
      
      </HelmetProvider>
     
   
     
   
    
  </React.StrictMode>,
)
