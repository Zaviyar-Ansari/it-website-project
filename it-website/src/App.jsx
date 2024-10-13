import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Service from './components/Service'
import Webdev from './components/Webdev'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
 <Router>
  <Navbar></Navbar>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/webdev" element={<Webdev />} />
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  )
}

export default App