import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {

  return (
    <div>
  
       <Header></Header>
      {/* <Home></Home> */}
      {/* <Resume></Resume>  */}
      <Portfolio></Portfolio>
      <Footer></Footer>

    </div>
  )
}

export default App
