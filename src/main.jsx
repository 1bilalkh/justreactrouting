import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Navbar from './Navbar.jsx'
import Products from './Products.jsx'
import Footer from './Footer.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  </StrictMode>,
)
