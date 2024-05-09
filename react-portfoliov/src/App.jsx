import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import NavTabs from './components/NavTabs'


function App() {

  return (
    <div>
       <Header></Header>
       {/* <NavTabs></NavTabs> */}
      {/* <Home></Home> */}
      {/* <Resume></Resume>  */}
      <Portfolio></Portfolio>
      {/* <Contact></Contact> */}
      <Footer></Footer>

    </div>
  )
}

export default App
