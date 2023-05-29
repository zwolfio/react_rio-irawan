import './assets/style.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About/About'
import Index from './page/Index/Index'
import Contact from './page/Contact/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
